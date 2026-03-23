"use client";
import styles from "./LandingPage.module.css";
const FEATURES=[
  {icon:"🧠",title:"Knowledge Frames",desc:"17 careers encoded as structured AI frames with slots for skills, interests, subjects, and salary."},
  {icon:"⚙️",title:"17 Production Rules",desc:"IF-THEN rules with certainty factors (CF) fire during forward chaining to conclude careers."},
  {icon:"📊",title:"Fuzzy Logic Scoring",desc:"Skill strengths (Basic/Confident/Expert) give partial membership — no binary guessing."},
  {icon:"🔀",title:"Conflict Resolution",desc:"When multiple rules fire for the same career, the highest-CF rule wins and conflicts are logged."},
  {icon:"💬",title:"Ask Why / How",desc:"Full reasoning trace showing exactly why a career was recommended and how the score was calculated."},
  {icon:"🗺️",title:"Personalised Roadmap",desc:"Year-by-year college plan, skills checklist, portfolio projects and resource links for your top career."},
];
export default function LandingPage({ onStart }) {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.badge}>Expert System · Rule-Based AI · Fuzzy Logic</div>
        <h1>Discover your <em>ideal career</em> with AI reasoning</h1>
        <p>CareerIQ uses a rule-based expert system — the same AI paradigm used in MYCIN and DENDRAL — to match your profile to the right career path.</p>
        <div className={styles.heroActions}>
          <button className={styles.primaryBtn} onClick={onStart}>Start the Quiz →</button>
          <a href="/test" target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>View Test Suite ↗</a>
        </div>
        <div className={styles.stats}>
          {[["17","Career Frames"],["17","Production Rules"],["12","Test Cases"],["100%","Pass Rate"]].map(([n,l])=>(
            <div key={l} className={styles.stat}><div className={styles.statNum}>{n}</div><div className={styles.statLabel}>{l}</div></div>
          ))}
        </div>
      </div>
      <div className={styles.featuresGrid}>
        {FEATURES.map(f=>(
          <div key={f.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.archBox}>
        <h2>System Architecture</h2>
        <div className={styles.archFlow}>
          {[
            {label:"User Input",sub:"Interests · Skills · Subjects · Profile",color:"#5b9cf6"},
            {label:"Working Memory",sub:"Facts Store",color:"#a78bfa"},
            {label:"Inference Engine",sub:"Forward + Backward Chaining",color:"#3ecfb0"},
            {label:"Knowledge Base",sub:"17 Career Frames + 17 Rules",color:"#e0a800"},
            {label:"Recommendations",sub:"Ranked · Explained · Scored",color:"#f06595"},
          ].map((n,i,arr)=>(
            <div key={n.label} className={styles.archStep}>
              <div className={styles.archNode} style={{borderColor:n.color+"44",background:n.color+"11",color:n.color}}>
                <div className={styles.archNodeLabel}>{n.label}</div>
                <div className={styles.archNodeSub}>{n.sub}</div>
              </div>
              {i<arr.length-1&&<div className={styles.archArrow}>↓</div>}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cta}>
        <h2>Ready to find your career?</h2>
        <p>Answer 4 quick questions. Get AI-powered recommendations with full reasoning traces.</p>
        <button className={styles.primaryBtn} onClick={onStart}>Begin the Assessment →</button>
      </div>
    </div>
  );
}
