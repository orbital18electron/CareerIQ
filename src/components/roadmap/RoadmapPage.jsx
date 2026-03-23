"use client";
import { useState } from "react";
import s from "./RoadmapPage.module.css";
export default function RoadmapPage({ topResult, roadmap }) {
  const [checked,setChecked] = useState({});
  if(!roadmap||!topResult) return <div className={s.empty}><p>Complete the quiz first to see your personalised roadmap.</p></div>;
  const total=roadmap.skills.length, done=Object.values(checked).filter(Boolean).length;
  const prog=total>0?Math.round((done/total)*100):0;
  const PC=["#5b9cf6","#3ecfb0","#a78bfa","#e0a800","#f06595"];
  return(
    <div className={`${s.page} animate-in`}>
      <div className={s.hero}>
        <div className={s.hicon}>{topResult.icon}</div>
        <div className={s.hbody}>
          <h2>Roadmap: <span>{topResult.name}</span></h2>
          <p>{roadmap.tagline}</p>
          <div className={s.hbadges}>
            <span className={s.bt}>{topResult.field}</span>
            <span className={s.ba}>Top Match</span>
          </div>
        </div>
        <div className={s.hscore}><div className={s.hbig}>{topResult.confidence}%</div><div className={s.hlbl}>match</div></div>
      </div>
      <div className={s.prog}><div className={s.ph}><span>Skills checklist</span><strong>{done} / {total} completed</strong></div><div className={s.pbar}><div className={s.pfill} style={{width:prog+"%"}}/></div></div>
      <section className={s.sec}><h3 className={s.st}><span>🗓️</span> Year-by-year college plan</h3>
        <div className={s.tl}>
          {roadmap.years.map((y,i)=>(
            <div key={i} className={s.ty}>
              <div className={s.td} style={{borderColor:y.color}}/>
              <div className={s.tyl} style={{color:y.color}}>{y.label}</div>
              <div className={s.tc}><h4>{y.title}</h4><ul className={s.tis}>{y.items.map((it,j)=><li key={j} className={s.ti}><span className={s.tb} style={{background:y.color}}/>{it}</li>)}</ul></div>
            </div>
          ))}
        </div>
      </section>
      <section className={s.sec}><h3 className={s.st}><span>✅</span> Skills to build — check off as you learn</h3>
        <div className={s.cl}>
          {roadmap.skills.map((sk,i)=>(
            <button key={i} className={`${s.ci}${checked[i]?" "+s.ck:""}`} onClick={()=>setChecked(p=>({...p,[i]:!p[i]}))}>
              <div className={s.cb}>{checked[i]&&"✓"}</div>
              <span className={s.cl2}>{sk.label}</span>
              <span className={s.ctag} style={{background:sk.tagColor+"22",color:sk.tagColor,border:`1px solid ${sk.tagColor}44`}}>{sk.tag}</span>
            </button>
          ))}
        </div>
      </section>
      <section className={s.sec}><h3 className={s.st}><span>🛠️</span> Projects for your portfolio</h3>
        <div className={s.pg}>{roadmap.projects.map((p,i)=><div key={i} className={s.pc}><div className={s.pph}><div className={s.ppn} style={{background:PC[i%5]+"22",color:PC[i%5]}}>P{i+1}</div><div className={s.ppt}>{p.title}</div></div><p className={s.ppd}>{p.desc}</p><div className={s.ppt2}>{p.tags.map(t=><span key={t} className={s.ptag}>{t}</span>)}</div></div>)}</div>
      </section>
      <section className={s.sec}><h3 className={s.st}><span>📚</span> Recommended resources</h3>
        <div className={s.rl}>
          {roadmap.resources.map((r,i)=>{
            const Tag=r.url?"a":"div";
            const lp=r.url?{href:r.url,target:"_blank",rel:"noopener noreferrer"}:{};
            return(
              <Tag key={i} className={`${s.ri}${r.url?" "+s.rlink:""}`} {...lp}>
                <div className={s.ricon}>{r.icon}</div>
                <div className={s.rb}><div className={s.rn}>{r.name}{r.url&&<span className={s.rarrow}> ↗</span>}</div><div className={s.rd}>{r.desc}</div></div>
                <span className={s.rbadge} style={{background:r.bc,color:r.bt}}>{r.badge}</span>
              </Tag>
            );
          })}
        </div>
      </section>
    </div>
  );
}
