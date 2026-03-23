// src/lib/inferenceEngine.js
// ─── INFERENCE ENGINE ─────────────────────────────────────────────────────────
// Features:
//   1. Fuzzy logic  — skill strengths (0.4/0.7/1.0) instead of binary 0/1
//   2. Certainty factors (CF) — rule confidence weights from rules.js
//   3. Forward chaining — fire all matching rules over facts
//   4. Backward chaining trace — verify conditions for explanation
//   5. Conflict resolution — when rules tie, higher CF wins; logged in response

import { KB } from "./knowledgeBase.js";
import { RULES } from "./rules.js";

// ── FUZZY MEMBERSHIP ─────────────────────────────────────────────────────────
// strength map: "basic"=0.4, "confident"=0.7, "expert"=1.0
// If no strength is provided, default to 1.0 (binary selection)
function fuzzyMembership(value, strengthMap) {
  if (!strengthMap || !strengthMap[value]) return 1.0;
  const s = strengthMap[value];
  if (s === "basic")     return 0.4;
  if (s === "confident") return 0.7;
  if (s === "expert")    return 1.0;
  return 1.0;
}

// ── FRAME SLOT MATCHING WITH FUZZY SCORES ────────────────────────────────────
function frameScore(careerData, facts) {
  const fields = ["interests","skills","subjects"];
  let total = 0;
  let match = 0;

  fields.forEach((field) => {
    careerData[field].forEach((req) => {
      total += 1;
      if (facts[field].includes(req)) {
        const strengthMap = facts[field + "Strength"] || {};
        match += fuzzyMembership(req, strengthMap);
      }
    });
  });

  if (careerData.grades.includes(facts.grades)) { match += 0.5; total += 0.5; }
  if (facts.env && careerData.env.includes(facts.env)) { match += 0.5; total += 0.5; }

  return total > 0 ? match / total : 0;
}

// ── SCORE CAREER WITH CF ──────────────────────────────────────────────────────
function scoreCareer(careerName, careerData, facts) {
  const frame = frameScore(careerData, facts);
  const rule = RULES.find((r) => r.career === careerName);
  const ruleFired = rule ? rule.test(facts) : false;

  // CF-weighted scoring:
  // If rule fires: base = CF * 0.45 + (1-CF)*0 + frame * 0.55
  // If no rule:    score = frame * 0.30
  const score = ruleFired
    ? rule.cf * 0.45 + (1 - rule.cf) * 0.1 + frame * 0.55
    : frame * 0.30;

  return Math.min(1, score);
}

// ── FORWARD CHAINING: FIRE ALL RULES ─────────────────────────────────────────
function forwardChain(facts) {
  const fired = [];
  RULES.forEach((rule) => {
    if (rule.test(facts)) fired.push({ ruleId: rule.id, career: rule.career, cf: rule.cf, reason: rule.reason });
  });
  return fired;
}

// ── CONFLICT RESOLUTION ───────────────────────────────────────────────────────
// Multiple rules may conclude the same career with different CFs.
// We keep the highest-CF rule and log any overridden conflicts.
function resolveConflicts(firedRules) {
  const best = {};
  const conflicts = [];

  firedRules.forEach((r) => {
    if (!best[r.career]) {
      best[r.career] = r;
    } else if (r.cf > best[r.career].cf) {
      conflicts.push({ career: r.career, overridden: best[r.career], winner: r });
      best[r.career] = r;
    } else {
      conflicts.push({ career: r.career, overridden: r, winner: best[r.career] });
    }
  });

  return { resolved: Object.values(best), conflicts };
}

// ── BACKWARD CHAINING TRACE ───────────────────────────────────────────────────
// For a given career's rule, verify each condition against current facts
// Returns [{condition, satisfied, fuzzyValue}]
function backwardTrace(careerName, facts) {
  const rule = RULES.find((r) => r.career === careerName);
  if (!rule) return [];

  return rule.conditions.map((cond) => {
    const parts = cond.split(" OR ").map((p) => p.trim());
    let satisfied = false;
    let fuzzyValue = 0;

    parts.forEach((part) => {
      const [type, val] = part.split("=");
      let fieldArr = [];
      let sMap = {};

      if (type === "interest")  { fieldArr = facts.interests; sMap = facts.interestsStrength||{}; }
      if (type === "skill")     { fieldArr = facts.skills;    sMap = facts.skillsStrength||{}; }
      if (type === "subject")   { fieldArr = facts.subjects;  sMap = facts.subjectsStrength||{}; }

      if (fieldArr.includes(val)) {
        satisfied = true;
        fuzzyValue = Math.max(fuzzyValue, fuzzyMembership(val, sMap));
      }
    });

    return { condition: cond, satisfied, fuzzyValue };
  });
}

// ── MAIN INFERENCE FUNCTION ───────────────────────────────────────────────────
export function runInference(facts) {
  // 1. Forward chain — fire all rules
  const firedRules = forwardChain(facts);

  // 2. Conflict resolution
  const { resolved: resolvedRules, conflicts } = resolveConflicts(firedRules);
  const firedCareers = new Set(resolvedRules.map((r) => r.career));

  // 3. Score all careers
  const results = Object.entries(KB)
    .map(([name, data]) => {
      const score = scoreCareer(name, data, facts);
      const rule = RULES.find((r) => r.career === name);
      const ruleFired = firedCareers.has(name);
      const resolvedRule = resolvedRules.find((r) => r.career === name);
      const trace = backwardTrace(name, facts);

      // Build radar data: how much the user's profile matches each dimension
      const radar = buildRadarProfile(name, data, facts);

      return {
        name, icon:data.icon, color:data.color, field:data.field,
        description:data.description, salary:data.salary,
        required_skills:data.required_skills, learn:data.learn,
        score, confidence:Math.round(score*100),
        ruleFired, ruleId:resolvedRule?.ruleId||null,
        cf:rule?.cf||null,
        ruleReason:rule?.reason||null,
        backwardTrace:trace, radar,
      };
    })
    .filter((r) => r.score > 0.05)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  return { results, conflicts, totalFiredRules: firedRules.length };
}

// ── RADAR PROFILE ─────────────────────────────────────────────────────────────
// Returns 5 dimension scores (0-100) for the spider chart
function buildRadarProfile(careerName, careerData, facts) {
  function overlap(required, userArr, sMap={}) {
    if (required.length===0) return 0;
    let total=0;
    required.forEach((r)=>{
      if (userArr.includes(r)) total += fuzzyMembership(r, sMap);
    });
    return Math.round((total/required.length)*100);
  }
  return {
    interests: overlap(careerData.interests, facts.interests, facts.interestsStrength||{}),
    skills:    overlap(careerData.skills,    facts.skills,    facts.skillsStrength||{}),
    subjects:  overlap(careerData.subjects,  facts.subjects,  facts.subjectsStrength||{}),
    grades:    careerData.grades.includes(facts.grades) ? 100 : 40,
    environment: (facts.env && careerData.env.includes(facts.env)) ? 100 : 30,
  };
}

// ── WHY / HOW EXPLANATION ─────────────────────────────────────────────────────
export function explainCareer(careerName, facts) {
  const data = KB[careerName];
  if (!data) return null;

  const rule = RULES.find((r) => r.career === careerName);
  const ruleFired = rule ? rule.test(facts) : false;
  const trace = backwardTrace(careerName, facts);
  const score = scoreCareer(careerName, data, facts);

  const matchedInterests = data.interests.filter((i) => facts.interests.includes(i));
  const matchedSkills    = data.skills.filter((s)    => facts.skills.includes(s));
  const matchedSubjects  = data.subjects.filter((s)  => facts.subjects.includes(s));
  const missingInterests = data.interests.filter((i) => !facts.interests.includes(i));
  const missingSkills    = data.skills.filter((s)    => !facts.skills.includes(s));

  return {
    careerName, score, confidence:Math.round(score*100),
    rule: rule ? { id:rule.id, cf:rule.cf, reason:rule.reason, fired:ruleFired } : null,
    backwardTrace: trace,
    why: {
      matchedInterests, matchedSkills, matchedSubjects,
      missingInterests, missingSkills,
      gradeMatch: data.grades.includes(facts.grades),
      envMatch: facts.env && data.env.includes(facts.env),
    },
    how: ruleFired
      ? `Rule ${rule.id} fired with certainty factor ${rule.cf}. The score formula: CF(${rule.cf}) × 0.45 + frame_overlap(${Math.round(score*100)}%) × 0.55 = ${Math.round(score*100)}%.`
      : `No primary rule fired. Score computed purely from frame-slot overlap across ${matchedInterests.length} interests, ${matchedSkills.length} skills, and ${matchedSubjects.length} subjects.`,
  };
}
