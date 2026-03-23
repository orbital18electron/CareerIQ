"use client";
import styles from "./ConceptsPage.module.css";
const CONCEPTS=[
  {color:"var(--blue)",bg:"rgba(91,156,246,0.12)",icon:"🧠",title:"Knowledge Representation",desc:"17 careers encoded as structured frames with slots for interests, skills, subjects, salary, environment, and learning paths. Mirrors how human experts organise professional knowledge.",chips:["Frames","Slots & Fillers","Declarative Knowledge"]},
  {color:"var(--teal)",bg:"rgba(62,207,176,0.12)",icon:"⚙️",title:"Rule-Based Reasoning",desc:"17 IF–THEN production rules each carry a Certainty Factor (CF) from 0.78–0.92, encoding expert confidence in each conclusion. When conditions are met, the rule fires.",chips:["Production Rules","Certainty Factors","IF–THEN Logic"]},
  {color:"var(--purple)",bg:"rgba(167,139,250,0.12)",icon:"🔀",title:"Inference Engine",desc:"Forward chaining fires all satisfied rules. Backward chaining verifies each condition individually for the explanation facility. CF-weighted scoring combines rule confidence with frame overlap.",chips:["Forward Chaining","Backward Chaining","CF Weighting"]},
  {color:"var(--accent)",bg:"rgba(224,168,0,0.12)",icon:"📋",title:"Working Memory",desc:"User answers are stored as facts in a temporary working memory that the inference engine reads during reasoning. Includes interests, skills, subjects, grade level, and environment.",chips:["Working Memory","Fact Assertion","Stateful Reasoning"]},
  {color:"var(--pink)",bg:"rgba(240,101,149,0.12)",icon:"📊",title:"Fuzzy Logic",desc:"Instead of binary yes/no matching, skill strengths (Basic=0.4, Confident=0.7, Expert=1.0) give partial membership scores. This models the real-world uncertainty of self-assessment.",chips:["Fuzzy Membership","Partial Matching","Linguistic Variables"]},
  {color:"var(--teal)",bg:"rgba(62,207,176,0.12)",icon:"🔀",title:"Conflict Resolution",desc:"When multiple rules conclude the same career with different certainty factors, the highest-CF rule is selected. All override events are logged and shown in the analysis page.",chips:["Conflict Resolution","Priority Selection","Audit Trail"]},
  {color:"var(--blue)",bg:"rgba(91,156,246,0.12)",icon:"💬",title:"Explanation Facility",desc:"Ask Why — shows which rule fired, CF, all backward-chaining traces, fuzzy values and skill gaps. Ask How — explains the exact scoring formula used.",chips:["Ask Why","Ask How","Transparency"]},
  {color:"var(--purple)",bg:"rgba(167,139,250,0.12)",icon:"🧪",title:"Validation & Testing",desc:"12 predefined test cases with expected outputs. A server-rendered test runner at /test shows pass/fail for each case, confidence scores, and top-3 breakdown.",chips:["Test Cases","Ground Truth","Validation Suite"]},
];
const RULES=[
  ["R1","interest=coding AND skill=programming","Software Engineer","0.92"],
  ["R2","interest=data AND skill=math OR statistics","Data Scientist","0.88"],
  ["R3","interest=coding AND interest=data AND skill=math","AI / ML Engineer","0.90"],
  ["R4","interest=coding AND interest=art","Game Developer","0.85"],
  ["R5","interest=coding AND skill=logic AND subject=cs","Cybersecurity Analyst","0.87"],
  ["R6","interest=helping AND (skill=biology OR subject=biology)","Doctor / Physician","0.91"],
  ["R7","interest=debating AND skill=communication","Lawyer","0.86"],
  ["R8","interest=art AND skill=creativity","Graphic Designer","0.84"],
  ["R9","interest=helping AND skill=empathy","Psychologist","0.83"],
  ["R10","(interest=art OR building) AND skill=spatial","Architect","0.85"],
  ["R11","interest=writing AND skill=writing_skill","Journalist","0.82"],
  ["R12","interest=nature AND (skill=research OR subject=geography)","Environmental Scientist","0.80"],
  ["R13","interest=teaching AND (skill=communication OR empathy)","Teacher","0.81"],
  ["R14","interest=business AND skill=mathematics","CA / Finance","0.87"],
  ["R15","interest=building AND skill=spatial AND subject=physics","Mechanical Engineer","0.86"],
  ["R16","interest=business AND skill=leadership","Entrepreneur","0.78"],
  ["R17","interest=art AND interest=science AND skill=creativity","Chef","0.79"],
  ["R18","interest=building AND skill=logic AND subject=physics AND cs","VLSI Engineer","0.91"],
  ["R19","interest=building AND interest=coding AND skill=logic AND subject=physics","Embedded Engineer","0.89"],
  ["R20","interest=building AND interest=coding AND skill=programming AND subject=physics","IoT Engineer","0.85"],
  ["R21","interest=science AND skill=mathematics AND skill=logic AND subject=physics","Signal Processing Eng.","0.88"],
  ["R22","interest=building AND skill=spatial AND subject=physics","Hardware / PCB Engineer","0.84"],
  ["R23","interest=building AND skill=mathematics AND skill=spatial AND subject=physics","Control / Robotics Eng.","0.87"],
];
export default function ConceptsPage({ setPage }) {
  return(
    <div className={`${styles.page} animate-in`}>
      <div className={styles.hero}>
        <h1>How the <em>AI</em> works</h1>
        <p>CareerIQ implements 8 core AI concepts from your syllabus — all working together in a single system.</p>
      </div>
      <div className={styles.grid}>
        {CONCEPTS.map(c=>(
          <div key={c.title} className={styles.card}>
            <div className={styles.accent} style={{background:c.color}}/>
            <div className={styles.icon} style={{background:c.bg}}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className={styles.chips}>{c.chips.map(ch=><span key={ch} className={styles.chip}>{ch}</span>)}</div>
          </div>
        ))}
      </div>
      <section className={styles.section}>
        <h2>Production Rules with Certainty Factors</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr><th>Rule</th><th>Condition (IF)</th><th>Conclusion (THEN)</th><th>CF</th></tr></thead>
            <tbody>
              {RULES.map(([id,cond,result,cf])=>(
                <tr key={id}>
                  <td style={{color:"var(--accent)",fontWeight:600}}>{id}</td>
                  <td><code>{cond}</code></td>
                  <td>{result}</td>
                  <td>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{width:48,height:5,background:"var(--surface2)",borderRadius:3,overflow:"hidden"}}>
                        <div style={{height:"100%",width:(parseFloat(cf)*100)+"%",background:"var(--teal)",borderRadius:3}}/>
                      </div>
                      <span style={{fontSize:11,color:"var(--teal)"}}>{cf}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className={styles.footer}>
        <p>Ready to experience the system in action?</p>
        <button className={styles.primaryBtn} onClick={()=>setPage("wizard")}>Take the Quiz →</button>
      </div>
    </div>
  );
}
