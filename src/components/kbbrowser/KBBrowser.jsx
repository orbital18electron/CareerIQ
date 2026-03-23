"use client";
import { useState } from "react";
import s from "./KBBrowser.module.css";
const KB_DATA=[
  {name:"Software Engineer",icon:"💻",color:"#5b9cf6",field:"Technology",interests:["coding","building"],skills:["programming","logic","mathematics"],subjects:["cs","math_sub","physics"],grades:["excellent","good"],salary:{entry:"₹4–7 LPA",senior:"₹25–50 LPA+"}},
  {name:"Data Scientist",icon:"📊",color:"#a78bfa",field:"Analytics/AI",interests:["coding","data","science"],skills:["mathematics","statistics","programming","research"],subjects:["math_sub","cs","economics"],grades:["excellent","good"],salary:{entry:"₹5–9 LPA",senior:"₹35–70 LPA+"}},
  {name:"AI / ML Engineer",icon:"🤖",color:"#3ecfb0",field:"Artificial Intelligence",interests:["coding","data","science","building"],skills:["programming","mathematics","statistics","logic"],subjects:["cs","math_sub","physics"],grades:["excellent"],salary:{entry:"₹6–12 LPA",senior:"₹50–1Cr+"}},
  {name:"Game Developer",icon:"🎮",color:"#f06595",field:"Gaming",interests:["coding","art","building"],skills:["programming","creativity","logic"],subjects:["cs","arts_sub","math_sub"],grades:["excellent","good","average"],salary:{entry:"₹3–6 LPA",senior:"₹22–50 LPA+"}},
  {name:"Cybersecurity Analyst",icon:"🔐",color:"#5b9cf6",field:"Security",interests:["coding","science","building"],skills:["programming","logic","research"],subjects:["cs","math_sub"],grades:["excellent","good"],salary:{entry:"₹4–8 LPA",senior:"₹30–60 LPA+"}},
  {name:"Doctor / Physician",icon:"🩺",color:"#f06595",field:"Healthcare",interests:["helping","science"],skills:["biology_skill","empathy","research"],subjects:["biology_sub","chemistry","psychology"],grades:["excellent","good"],salary:{entry:"₹6–12 LPA",senior:"₹40–1Cr+"}},
  {name:"Lawyer",icon:"⚖️",color:"#f5c842",field:"Law & Justice",interests:["debating","writing","helping"],skills:["communication","writing_skill","research","logic"],subjects:["social","literature","economics"],grades:["excellent","good"],salary:{entry:"₹3–8 LPA",senior:"₹30–1Cr+"}},
  {name:"Graphic/UI Designer",icon:"🎨",color:"#f06595",field:"Creative/Design",interests:["art","coding"],skills:["creativity","spatial","communication"],subjects:["arts_sub","cs","psychology"],grades:["excellent","good","average"],salary:{entry:"₹2.5–5 LPA",senior:"₹20–50 LPA+"}},
  {name:"Psychologist",icon:"🧠",color:"#a78bfa",field:"Mental Health",interests:["helping","science","writing"],skills:["empathy","communication","research"],subjects:["psychology","biology_sub","social"],grades:["excellent","good","average"],salary:{entry:"₹3–6 LPA",senior:"₹20–40 LPA+"}},
  {name:"Architect",icon:"🏗️",color:"#3ecfb0",field:"Design & Construction",interests:["art","building","science"],skills:["creativity","spatial","mathematics"],subjects:["arts_sub","math_sub","physics"],grades:["excellent","good"],salary:{entry:"₹3–6 LPA",senior:"₹25–60 LPA+"}},
  {name:"Journalist",icon:"📰",color:"#f5c842",field:"Media",interests:["writing","debating","teaching"],skills:["writing_skill","communication","research"],subjects:["literature","social","geography"],grades:["excellent","good","average","improving"],salary:{entry:"₹2.5–5 LPA",senior:"₹18–40 LPA+"}},
  {name:"Environmental Scientist",icon:"🌿",color:"#63c654",field:"Environment",interests:["nature","science","writing"],skills:["research","biology_skill","statistics"],subjects:["geography","biology_sub","chemistry"],grades:["excellent","good","average"],salary:{entry:"₹3–6 LPA",senior:"₹18–35 LPA+"}},
  {name:"Teacher",icon:"📚",color:"#5b9cf6",field:"Education",interests:["teaching","helping","writing"],skills:["communication","empathy","leadership"],subjects:["literature","social","psychology"],grades:["excellent","good","average","improving"],salary:{entry:"₹2.5–5 LPA",senior:"₹12–25 LPA+"}},
  {name:"CA / Finance",icon:"💹",color:"#f5c842",field:"Finance",interests:["business","science"],skills:["mathematics","logic","research"],subjects:["economics","math_sub"],grades:["excellent","good"],salary:{entry:"₹5–10 LPA",senior:"₹35–80 LPA+"}},
  {name:"Mechanical Engineer",icon:"⚙️",color:"#e0a800",field:"Engineering",interests:["building","science"],skills:["spatial","mathematics","logic"],subjects:["physics","math_sub","cs"],grades:["excellent","good"],salary:{entry:"₹3–6 LPA",senior:"₹20–45 LPA+"}},
  {name:"Entrepreneur",icon:"🚀",color:"#f06595",field:"Business/Startups",interests:["business","building","coding"],skills:["leadership","communication","creativity"],subjects:["economics","cs","psychology"],grades:["excellent","good","average","improving"],salary:{entry:"Variable",senior:"Unlimited"}},
  {name:"Chef",icon:"👨‍🍳",color:"#e0a800",field:"Hospitality",interests:["art","science","nature"],skills:["creativity","leadership","research"],subjects:["chemistry","arts_sub","biology_sub"],grades:["excellent","good","average","improving"],salary:{entry:"₹2–4 LPA",senior:"₹15–50 LPA+"}},
];
const RULES_DATA=[
  {id:"R1",cf:0.92,career:"Software Engineer",conditions:["interest=coding","skill=programming"]},
  {id:"R2",cf:0.88,career:"Data Scientist",conditions:["interest=data","skill=math OR statistics"]},
  {id:"R3",cf:0.90,career:"AI / ML Engineer",conditions:["interest=coding","interest=data","skill=mathematics"]},
  {id:"R4",cf:0.85,career:"Game Developer",conditions:["interest=coding","interest=art"]},
  {id:"R5",cf:0.87,career:"Cybersecurity Analyst",conditions:["interest=coding","skill=logic","subject=cs"]},
  {id:"R6",cf:0.91,career:"Doctor / Physician",conditions:["interest=helping","skill=biology OR subject=biology/chemistry"]},
  {id:"R7",cf:0.86,career:"Lawyer",conditions:["interest=debating","skill=communication"]},
  {id:"R8",cf:0.84,career:"Graphic/UI Designer",conditions:["interest=art","skill=creativity"]},
  {id:"R9",cf:0.83,career:"Psychologist",conditions:["interest=helping","skill=empathy"]},
  {id:"R10",cf:0.85,career:"Architect",conditions:["interest=art OR building","skill=spatial"]},
  {id:"R11",cf:0.82,career:"Journalist",conditions:["interest=writing","skill=writing_skill"]},
  {id:"R12",cf:0.80,career:"Environmental Scientist",conditions:["interest=nature","skill=research OR subject=geography"]},
  {id:"R13",cf:0.81,career:"Teacher",conditions:["interest=teaching","skill=communication OR empathy"]},
  {id:"R14",cf:0.87,career:"CA / Finance",conditions:["interest=business","skill=mathematics"]},
  {id:"R15",cf:0.86,career:"Mechanical Engineer",conditions:["interest=building","skill=spatial","subject=physics"]},
  {id:"R16",cf:0.78,career:"Entrepreneur",conditions:["interest=business","skill=leadership"]},
  {id:"R17",cf:0.79,career:"Chef",conditions:["interest=art","interest=science","skill=creativity"]},
];
export default function KBBrowser() {
  const [tab,setTab] = useState("frames");
  const [search,setSearch] = useState("");
  const [sel,setSel] = useState(null);
  const filtered = tab==="frames"
    ? KB_DATA.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())||c.field.toLowerCase().includes(search.toLowerCase()))
    : RULES_DATA.filter(r=>r.career.toLowerCase().includes(search.toLowerCase())||r.id.toLowerCase().includes(search.toLowerCase()));
  return(
    <div className={`${s.page} animate-in`}>
      <div className={s.hero}>
        <h2>Knowledge Base Browser</h2>
        <p>Explore all career frames and production rules that power the expert system</p>
      </div>
      <div className={s.controls}>
        <div className={s.tabs}>
          <button className={`${s.tab}${tab==="frames"?" "+s.active:""}`} onClick={()=>{setTab("frames");setSel(null);}}>🗂 {KB_DATA.length} Career Frames</button>
          <button className={`${s.tab}${tab==="rules"?" "+s.active:""}`} onClick={()=>{setTab("rules");setSel(null);}}>📜 {RULES_DATA.length} Production Rules</button>
        </div>
        <input className={s.search} placeholder="Search…" value={search} onChange={e=>setSearch(e.target.value)}/>
      </div>
      {tab==="frames"&&(
        <div className={s.layout}>
          <div className={s.list2}>
            {filtered.map(c=>(
              <button key={c.name} className={`${s.item}${sel?.name===c.name?" "+s.itemSel:""}`} onClick={()=>setSel(c)}>
                <span>{c.icon}</span><span className={s.iname}>{c.name}</span>
                <span className={s.ifield}>{c.field}</span>
              </button>
            ))}
          </div>
          {sel?(
            <div className={s.detail}>
              <div className={s.dh} style={{borderColor:sel.color}}><span className={s.dicon}>{sel.icon}</span><div><h3>{sel.name}</h3><span className={s.dfield}>{sel.field}</span></div></div>
              {[["interests",sel.interests],["skills",sel.skills],["subjects",sel.subjects],["grades",sel.grades]].map(([k,v])=>(
                <div key={k} className={s.slot}>
                  <span className={s.sk} style={{color:sel.color}}>{k}</span>
                  <div className={s.sv}>{v.map(x=><span key={x} className={s.pill}>{x}</span>)}</div>
                </div>
              ))}
              <div className={s.slot}><span className={s.sk} style={{color:sel.color}}>salary</span><div className={s.sv}><span className={s.pill}>{sel.salary.entry}</span><span>→</span><span className={s.pill}>{sel.salary.senior}</span></div></div>
            </div>
          ):(
            <div className={s.empty}>← Select a career frame to inspect its slots</div>
          )}
        </div>
      )}
      {tab==="rules"&&(
        <div className={s.rulesGrid}>
          {filtered.map(r=>(
            <div key={r.id} className={s.ruleCard}>
              <div className={s.ruleHead}>
                <span className={s.rid}>{r.id}</span>
                <span className={s.rcareer}>{r.career}</span>
                <span className={s.rcf}>CF={r.cf}</span>
              </div>
              <div className={s.rbar}><div className={s.rfill} style={{width:(r.cf*100)+"%"}}/></div>
              <div className={s.rconds}>
                {r.conditions.map((c,i)=>(
                  <span key={i} className={s.rcond}>{i>0&&<span className={s.rand}>AND </span>}{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
