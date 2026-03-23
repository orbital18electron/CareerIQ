// src/lib/rules.js
// ─── PRODUCTION RULES WITH CERTAINTY FACTORS ────────────────────────────────
// Each rule includes:
//   cf      — certainty factor 0–1 (expert-assigned confidence in the rule)
//   test    — pure boolean function over facts (forward chaining)
//   reason  — human-readable rule for the explanation facility

export const RULES = [
  {
    id:"R1", career:"Software Engineer", cf:0.92,
    test:(f)=>f.interests.includes("coding")&&f.skills.includes("programming"),
    reason:"IF interest=coding AND skill=programming → Software Engineer",
    conditions:["interest=coding","skill=programming"],
  },
  {
    id:"R2", career:"Data Scientist", cf:0.88,
    test:(f)=>f.interests.includes("data")&&(f.skills.includes("mathematics")||f.skills.includes("statistics")),
    reason:"IF interest=data AND skill=(mathematics OR statistics) → Data Scientist",
    conditions:["interest=data","skill=mathematics OR statistics"],
  },
  {
    id:"R3", career:"AI / ML Engineer", cf:0.90,
    test:(f)=>f.interests.includes("coding")&&f.interests.includes("data")&&f.skills.includes("mathematics"),
    reason:"IF interest=coding AND interest=data AND skill=mathematics → AI/ML Engineer",
    conditions:["interest=coding","interest=data","skill=mathematics"],
  },
  {
    id:"R4", career:"Game Developer", cf:0.85,
    test:(f)=>f.interests.includes("coding")&&f.interests.includes("art"),
    reason:"IF interest=coding AND interest=art → Game Developer",
    conditions:["interest=coding","interest=art"],
  },
  {
    id:"R5", career:"Cybersecurity Analyst", cf:0.87,
    test:(f)=>f.interests.includes("coding")&&f.skills.includes("logic")&&f.subjects.includes("cs"),
    reason:"IF interest=coding AND skill=logic AND subject=cs → Cybersecurity Analyst",
    conditions:["interest=coding","skill=logic","subject=cs"],
  },
  {
    id:"R6", career:"Doctor / Physician", cf:0.91,
    test:(f)=>f.interests.includes("helping")&&(f.skills.includes("biology_skill")||f.subjects.includes("biology_sub")||f.subjects.includes("chemistry")),
    reason:"IF interest=helping AND (skill=biology OR subject=biology/chemistry) → Doctor",
    conditions:["interest=helping","skill=biology OR subject=biology/chemistry"],
  },
  {
    id:"R7", career:"Lawyer", cf:0.86,
    test:(f)=>f.interests.includes("debating")&&f.skills.includes("communication"),
    reason:"IF interest=debating AND skill=communication → Lawyer",
    conditions:["interest=debating","skill=communication"],
  },
  {
    id:"R8", career:"Graphic Designer / UI Designer", cf:0.84,
    test:(f)=>f.interests.includes("art")&&f.skills.includes("creativity"),
    reason:"IF interest=art AND skill=creativity → Graphic Designer",
    conditions:["interest=art","skill=creativity"],
  },
  {
    id:"R9", career:"Psychologist / Counselor", cf:0.83,
    test:(f)=>f.interests.includes("helping")&&f.skills.includes("empathy"),
    reason:"IF interest=helping AND skill=empathy → Psychologist",
    conditions:["interest=helping","skill=empathy"],
  },
  {
    id:"R10", career:"Architect", cf:0.85,
    test:(f)=>(f.interests.includes("art")||f.interests.includes("building"))&&f.skills.includes("spatial"),
    reason:"IF (interest=art OR building) AND skill=spatial → Architect",
    conditions:["interest=art OR building","skill=spatial"],
  },
  {
    id:"R11", career:"Journalist / Content Creator", cf:0.82,
    test:(f)=>f.interests.includes("writing")&&f.skills.includes("writing_skill"),
    reason:"IF interest=writing AND skill=writing → Journalist / Content Creator",
    conditions:["interest=writing","skill=writing_skill"],
  },
  {
    id:"R12", career:"Environmental Scientist", cf:0.80,
    test:(f)=>f.interests.includes("nature")&&(f.skills.includes("research")||f.subjects.includes("geography")),
    reason:"IF interest=nature AND (skill=research OR subject=geography) → Environmental Scientist",
    conditions:["interest=nature","skill=research OR subject=geography"],
  },
  {
    id:"R13", career:"Teacher / Educator", cf:0.81,
    test:(f)=>f.interests.includes("teaching")&&(f.skills.includes("communication")||f.skills.includes("empathy")),
    reason:"IF interest=teaching AND (skill=communication OR empathy) → Teacher / Educator",
    conditions:["interest=teaching","skill=communication OR empathy"],
  },
  {
    id:"R14", career:"Chartered Accountant / Finance", cf:0.87,
    test:(f)=>f.interests.includes("business")&&f.skills.includes("mathematics"),
    reason:"IF interest=business AND skill=mathematics → Chartered Accountant",
    conditions:["interest=business","skill=mathematics"],
  },
  {
    id:"R15", career:"Mechanical Engineer", cf:0.86,
    test:(f)=>f.interests.includes("building")&&f.skills.includes("spatial")&&f.subjects.includes("physics"),
    reason:"IF interest=building AND skill=spatial AND subject=physics → Mechanical Engineer",
    conditions:["interest=building","skill=spatial","subject=physics"],
  },
  {
    id:"R16", career:"Entrepreneur", cf:0.78,
    test:(f)=>f.interests.includes("business")&&f.skills.includes("leadership"),
    reason:"IF interest=business AND skill=leadership → Entrepreneur",
    conditions:["interest=business","skill=leadership"],
  },
  {
    id:"R17", career:"Chef / Culinary Professional", cf:0.79,
    test:(f)=>f.interests.includes("art")&&f.interests.includes("science")&&f.skills.includes("creativity"),
    reason:"IF interest=art AND interest=science AND skill=creativity → Chef",
    conditions:["interest=art","interest=science","skill=creativity"],
  },

  // ── ELECTRONICS & SYSTEMS RULES ────────────────────────────────────────────
  {
    id:"R18", career:"VLSI / Chip Design Engineer", cf:0.91,
    test:(f)=>f.interests.includes("building")&&f.skills.includes("logic")&&f.subjects.includes("physics")&&f.subjects.includes("cs"),
    reason:"IF interest=building AND skill=logic AND subject=physics AND subject=cs → VLSI Engineer",
    conditions:["interest=building","skill=logic","subject=physics","subject=cs"],
  },
  {
    id:"R19", career:"Embedded Systems Engineer", cf:0.89,
    test:(f)=>f.interests.includes("building")&&f.interests.includes("coding")&&f.skills.includes("logic")&&f.subjects.includes("physics"),
    reason:"IF interest=building AND interest=coding AND skill=logic AND subject=physics → Embedded Engineer",
    conditions:["interest=building","interest=coding","skill=logic","subject=physics"],
  },
  {
    id:"R20", career:"IoT Engineer", cf:0.85,
    test:(f)=>f.interests.includes("building")&&f.interests.includes("coding")&&f.skills.includes("programming")&&f.subjects.includes("physics"),
    reason:"IF interest=building AND interest=coding AND skill=programming AND subject=physics → IoT Engineer",
    conditions:["interest=building","interest=coding","skill=programming","subject=physics"],
  },
  {
    id:"R21", career:"Signal Processing Engineer", cf:0.88,
    test:(f)=>f.interests.includes("science")&&f.skills.includes("mathematics")&&f.skills.includes("logic")&&f.subjects.includes("physics"),
    reason:"IF interest=science AND skill=mathematics AND skill=logic AND subject=physics → Signal Processing Engineer",
    conditions:["interest=science","skill=mathematics","skill=logic","subject=physics"],
  },
  {
    id:"R22", career:"Hardware / PCB Design Engineer", cf:0.84,
    test:(f)=>f.interests.includes("building")&&f.skills.includes("spatial")&&f.subjects.includes("physics"),
    reason:"IF interest=building AND skill=spatial AND subject=physics → Hardware Engineer",
    conditions:["interest=building","skill=spatial","subject=physics"],
  },
  {
    id:"R23", career:"Control Systems / Robotics Engineer", cf:0.87,
    test:(f)=>f.interests.includes("building")&&f.skills.includes("mathematics")&&f.skills.includes("spatial")&&f.subjects.includes("physics"),
    reason:"IF interest=building AND skill=mathematics AND skill=spatial AND subject=physics → Control/Robotics Engineer",
    conditions:["interest=building","skill=mathematics","skill=spatial","subject=physics"],
  },
];
