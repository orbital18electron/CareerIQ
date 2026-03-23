"use client";
import { useState } from "react";
import s from "./WizardPage.module.css";
const INTERESTS=[
  {v:"coding",l:"Coding & Programming",i:"💻"},{v:"data",l:"Data & Analysis",i:"📊"},
  {v:"helping",l:"Helping People",i:"🩺"},{v:"art",l:"Art & Design",i:"🎨"},
  {v:"writing",l:"Writing & Storytelling",i:"✍️"},{v:"debating",l:"Debating & Arguing",i:"⚖️"},
  {v:"science",l:"Science & Research",i:"🔬"},{v:"business",l:"Business & Finance",i:"💼"},
  {v:"teaching",l:"Teaching & Mentoring",i:"📚"},{v:"nature",l:"Nature & Environment",i:"🌿"},
  {v:"building",l:"Building & Engineering",i:"🏗️"},{v:"music",l:"Music & Performing",i:"🎵"},
];
const SKILLS=[
  {v:"programming",l:"Programming",i:"⌨️"},{v:"mathematics",l:"Mathematics",i:"🔢"},
  {v:"creativity",l:"Creativity",i:"🎭"},{v:"communication",l:"Communication",i:"🗣️"},
  {v:"biology_skill",l:"Biology / Life Sciences",i:"🧬"},{v:"statistics",l:"Statistics",i:"📈"},
  {v:"research",l:"Research & Analysis",i:"🔍"},{v:"leadership",l:"Leadership",i:"🧭"},
  {v:"empathy",l:"Empathy & Listening",i:"💬"},{v:"logic",l:"Logical Thinking",i:"🧩"},
  {v:"writing_skill",l:"Writing",i:"📝"},{v:"spatial",l:"Spatial Reasoning",i:"📐"},
];
const SUBJECTS=[
  {v:"cs",l:"Computer Science",i:"🖥️"},{v:"math_sub",l:"Mathematics",i:"🔣"},
  {v:"biology_sub",l:"Biology",i:"🧫"},{v:"chemistry",l:"Chemistry",i:"⚗️"},
  {v:"physics",l:"Physics",i:"⚛️"},{v:"literature",l:"Literature & Language",i:"📖"},
  {v:"social",l:"Social Studies / History",i:"🏛️"},{v:"economics",l:"Economics",i:"💹"},
  {v:"arts_sub",l:"Arts & Design",i:"🖌️"},{v:"psychology",l:"Psychology",i:"🧠"},
  {v:"geography",l:"Geography / Environment",i:"🌍"},{v:"music_sub",l:"Music",i:"🎼"},
];
const GRADES=[{v:"excellent",l:"Excellent",i:"🏆",d:"Top of class"},{v:"good",l:"Good",i:"👍",d:"Above average"},{v:"average",l:"Average",i:"📘",d:"Pass grades"},{v:"improving",l:"Improving",i:"📈",d:"Getting better"}];
const ENVS=[{v:"office",l:"Office / Remote",i:"🏢"},{v:"lab",l:"Lab / Research",i:"🧪"},{v:"field",l:"Field / Outdoors",i:"🌐"},{v:"clinic",l:"Clinic / Studio",i:"🏥"}];

function Dots({step}){
  return <div className={s.dots}>{[0,1,2,3,4].map(i=><div key={i} className={`${s.dot}${i<step?" "+s.done:i===step?" "+s.active:""}`}/>)}</div>;
}
function Chips({items,sel,onToggle}){
  return(
    <div className={s.grid}>
      {items.map(it=>(
        <button key={it.v} className={`${s.chip}${sel.includes(it.v)?" "+s.selected:""}`} onClick={()=>onToggle(it.v)}>
          <span>{it.i}</span>{it.l}
        </button>
      ))}
    </div>
  );
}
function Radios({items,sel,onSel}){
  return(
    <div className={s.rgrid}>
      {items.map(it=>(
        <button key={it.v} className={`${s.rc}${sel===it.v?" "+s.rsel:""}`} onClick={()=>onSel(it.v)}>
          <div className={s.ri}>{it.i}</div>
          <div className={s.rl}>{it.l}</div>
          {it.d&&<div className={s.rd}>{it.d}</div>}
        </button>
      ))}
    </div>
  );
}
// Live Trace sidebar — shows rules firing as user selects chips
function LiveTrace({answers}){
  const RULE_PREVIEWS=[
    {career:"Software Engineer",color:"#5b9cf6",test:a=>a.interests.includes("coding")&&a.skills.includes("programming"),conditions:["coding","programming"]},
    {career:"Data Scientist",color:"#a78bfa",test:a=>a.interests.includes("data")&&(a.skills.includes("mathematics")||a.skills.includes("statistics")),conditions:["data","math/stats"]},
    {career:"AI / ML Engineer",color:"#3ecfb0",test:a=>a.interests.includes("coding")&&a.interests.includes("data")&&a.skills.includes("mathematics"),conditions:["coding","data","math"]},
    {career:"Doctor",color:"#f06595",test:a=>a.interests.includes("helping")&&(a.skills.includes("biology_skill")||a.subjects.includes("biology_sub")),conditions:["helping","biology"]},
    {career:"Lawyer",color:"#f5c842",test:a=>a.interests.includes("debating")&&a.skills.includes("communication"),conditions:["debating","communication"]},
    {career:"Designer",color:"#f06595",test:a=>a.interests.includes("art")&&a.skills.includes("creativity"),conditions:["art","creativity"]},
    {career:"Psychologist",color:"#a78bfa",test:a=>a.interests.includes("helping")&&a.skills.includes("empathy"),conditions:["helping","empathy"]},
    {career:"Game Developer",color:"#e0a800",test:a=>a.interests.includes("coding")&&a.interests.includes("art"),conditions:["coding","art"]},
  ];
  const fired = RULE_PREVIEWS.filter(r=>r.test(answers));
  const partial = RULE_PREVIEWS.filter(r=>!r.test(answers)&&r.conditions.some(c=>[...answers.interests,...answers.skills,...answers.subjects].some(x=>x.includes(c.split("/")[0]))));
  return(
    <div className={s.trace}>
      <div className={s.traceTitle}>⚡ Live Inference Trace</div>
      {fired.length===0&&partial.length===0&&<p className={s.traceMuted}>Select interests and skills to see rules fire in real time…</p>}
      {fired.map(r=>(
        <div key={r.career} className={s.traceRule}>
          <div className={s.traceDot} style={{background:r.color}}/>
          <div><span className={s.traceCareer} style={{color:r.color}}>{r.career}</span><span className={s.traceFired}> ✓ Rule fired</span></div>
        </div>
      ))}
      {partial.map(r=>(
        <div key={r.career} className={`${s.traceRule} ${s.tracePartial}`}>
          <div className={s.traceDot} style={{background:r.color,opacity:0.4}}/>
          <div><span className={s.traceCareer} style={{color:r.color,opacity:0.7}}>{r.career}</span><span className={s.tracePartialLbl}> partial match</span></div>
        </div>
      ))}
    </div>
  );
}

export default function WizardPage({step,answers,toggleChip,setRadio,goNext,goBack,runInference,loading,results,reset,setPage}){
  if(loading) return(
    <div className={s.loading}>
      <div className={s.spinner}/>
      <h3>Running inference engine…</h3>
      <p>Applying forward chaining + certainty factor scoring</p>
    </div>
  );
  if(step===4&&results.length>0) return(
    <div className={`${s.results} animate-in`}>
      <div className={s.rh}><h2>Your career <em>matches</em></h2><p>Ranked by confidence — click View Roadmap for your full plan</p></div>
      <div className={s.rlist}>
        {results.map((r,i)=>(
          <div key={r.name} className={`${s.card2}${i===0?" "+s.top:""}`}>
            <div className={s.ch}>
              <div className={s.ci} style={{background:r.color+"22"}}>{r.icon}</div>
              <div><div className={s.ct}>{r.name}</div><div className={s.cf2}>{r.field}</div></div>
              <div className={s.sc}><div className={s.sp}>{r.confidence}%</div><div className={s.ss}>match</div></div>
            </div>
            <div className={s.bar}><div className={s.fill} style={{width:r.confidence+"%",background:r.color}}/></div>
            <div className={s.tags}>{r.required_skills.map(sk=><span key={sk} className={s.tag}>{sk}</span>)}</div>
            <div className={s.meta}>
              <span>Entry: {r.salary.entry}</span>
              <span>Senior: {r.salary.senior}</span>
              {r.ruleFired&&<span className={s.rf}>✓ CF={r.cf} rule fired</span>}
            </div>
          </div>
        ))}
      </div>
      <div className={s.ra}>
        <button className={s.ghost} onClick={reset}>↺ Start Over</button>
        <button className={s.primary} onClick={()=>setPage("roadmap")}>View My Roadmap →</button>
      </div>
    </div>
  );
  return(
    <div className={s.wrap}>
      <div className={s.left}>
        <Dots step={step}/>
        {step===0&&(
          <div className={`${s.card} animate-in`}>
            <div className={s.sl}>Step 1 of 4 — Interests</div>
            <h2>What topics excite you?</h2>
            <p>Select all that genuinely interest you.</p>
            <Chips items={INTERESTS} sel={answers.interests} onToggle={v=>toggleChip("interests",v)}/>
            <div className={s.br}><span className={s.hint}>Select at least 1</span><button className={s.primary} onClick={goNext} disabled={!answers.interests.length}>Next →</button></div>
          </div>
        )}
        {step===1&&(
          <div className={`${s.card} animate-in`}>
            <div className={s.sl}>Step 2 of 4 — Skills</div>
            <h2>What are you good at?</h2>
            <p>Be honest — areas where you feel confident.</p>
            <Chips items={SKILLS} sel={answers.skills} onToggle={v=>toggleChip("skills",v)}/>
            <div className={s.br}><button className={s.ghost} onClick={goBack}>← Back</button><button className={s.primary} onClick={goNext} disabled={!answers.skills.length}>Next →</button></div>
          </div>
        )}
        {step===2&&(
          <div className={`${s.card} animate-in`}>
            <div className={s.sl}>Step 3 of 4 — Subjects</div>
            <h2>Which subjects do you enjoy?</h2>
            <p>Pick subjects you genuinely like studying.</p>
            <Chips items={SUBJECTS} sel={answers.subjects} onToggle={v=>toggleChip("subjects",v)}/>
            <div className={s.br}><button className={s.ghost} onClick={goBack}>← Back</button><button className={s.primary} onClick={goNext} disabled={!answers.subjects.length}>Next →</button></div>
          </div>
        )}
        {step===3&&(
          <div className={`${s.card} animate-in`}>
            <div className={s.sl}>Step 4 of 4 — Profile</div>
            <h2>A bit more about you</h2>
            <p style={{marginBottom:12}}>Academic performance</p>
            <Radios items={GRADES} sel={answers.grades} onSel={v=>setRadio("grades",v)}/>
            <p style={{marginTop:"1.25rem",marginBottom:12}}>Preferred work environment</p>
            <Radios items={ENVS} sel={answers.env} onSel={v=>setRadio("env",v)}/>
            <div className={s.br} style={{marginTop:"1.5rem"}}><button className={s.ghost} onClick={goBack}>← Back</button><button className={s.primary} onClick={runInference} disabled={!answers.grades||!answers.env}>Analyse →</button></div>
          </div>
        )}
      </div>
      <LiveTrace answers={answers}/>
    </div>
  );
}
