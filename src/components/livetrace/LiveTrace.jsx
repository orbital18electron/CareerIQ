"use client";
import { useMemo } from "react";
import { RULES } from "@/lib/rules";
import styles from "./LiveTrace.module.css";
export default function LiveTrace({ answers }) {
  const firing = useMemo(()=>RULES.filter(r=>r.test({...answers,interests:answers.interests||[],skills:answers.skills||[],subjects:answers.subjects||[],grades:answers.grades||"",env:answers.env||""})), [answers]);
  const partial = useMemo(()=>{
    return RULES.map(r=>{
      const conditions = r.conditions || [];
      const met = conditions.filter(cond=>{
        const parts = cond.split(" OR ").map(p=>p.trim());
        return parts.some(part=>{
          const [type,val]=part.split("=");
          if(type==="interest") return (answers.interests||[]).includes(val);
          if(type==="skill")    return (answers.skills||[]).includes(val);
          if(type==="subject")  return (answers.subjects||[]).includes(val);
          return false;
        });
      });
      const pct = conditions.length > 0 ? Math.round((met.length/conditions.length)*100) : 0;
      return {...r, met:met.length, total:conditions.length, pct};
    }).filter(r=>r.pct>0&&r.pct<100).sort((a,b)=>b.pct-a.pct).slice(0,5);
  },[answers]);
  if(firing.length===0&&partial.length===0) return(
    <div className={styles.empty}>
      <div className={styles.emptyIcon}>🔍</div>
      <p>Select interests and skills to see rules activate in real time</p>
    </div>
  );
  return(
    <div className={styles.trace}>
      {firing.length>0&&(
        <div className={styles.section}>
          <div className={styles.sectionTitle}>✅ Rules Fired ({firing.length})</div>
          {firing.map(r=>(
            <div key={r.id} className={styles.firedRule}>
              <div className={styles.ruleId}>{r.id}</div>
              <div className={styles.ruleCareer}>{r.career}</div>
              <div className={styles.cfBadge}>CF {r.cf}</div>
            </div>
          ))}
        </div>
      )}
      {partial.length>0&&(
        <div className={styles.section}>
          <div className={styles.sectionTitle}>⚡ Partially Matched</div>
          {partial.map(r=>(
            <div key={r.id} className={styles.partialRule}>
              <div className={styles.partialTop}>
                <span className={styles.ruleId}>{r.id}</span>
                <span className={styles.ruleCareer}>{r.career}</span>
                <span className={styles.pct}>{r.pct}%</span>
              </div>
              <div className={styles.miniBar}><div className={styles.miniFill} style={{width:r.pct+"%"}}/></div>
              <div className={styles.progress}>{r.met}/{r.total} conditions met</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
