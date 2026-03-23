"use client";
import { useState } from "react";
import RadarChart from "../radar/RadarChart";
import s from "./ResultsPage.module.css";

function WhyModal({ data, loading, onClose }) {
  if (!data && !loading) return null;
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={e=>e.stopPropagation()}>
        <div className={s.mh}>
          <h3>Why {data?.careerName}?</h3>
          <button className={s.mclose} onClick={onClose}>✕</button>
        </div>
        {loading && <div className={s.mload}>Analysing reasoning…</div>}
        {data && (
          <>
            <div className={s.msec}>
              <div className={s.msecLabel}>Confidence Score</div>
              <div className={s.mScore}>{data.confidence}%</div>
            </div>
            {data.rule && (
              <div className={s.msec}>
                <div className={s.msecLabel}>Rule That Fired</div>
                <div className={s.mRule}>
                  <span className={s.mRuleId}>{data.rule.id}</span>
                  <span className={s.mRuleText}>{data.rule.reason}</span>
                  <span className={s.mCF}>CF = {data.rule.cf}</span>
                </div>
              </div>
            )}
            <div className={s.msec}>
              <div className={s.msecLabel}>Backward Chaining Trace</div>
              {data.backwardTrace.map((t,i)=>(
                <div key={i} className={`${s.trace} ${t.satisfied?s.traceOk:s.traceFail}`}>
                  <span>{t.satisfied?"✓":"✗"}</span>
                  <span>{t.condition}</span>
                  {t.fuzzyValue>0&&t.fuzzyValue<1&&<span className={s.fuzzy}>fuzzy={t.fuzzyValue.toFixed(1)}</span>}
                </div>
              ))}
            </div>
            <div className={s.msec}>
              <div className={s.msecLabel}>How the Score Was Computed</div>
              <p className={s.mHow}>{data.how}</p>
            </div>
            {data.why.matchedSkills.length>0&&(
              <div className={s.msec}>
                <div className={s.msecLabel}>Skills You Already Have</div>
                <div className={s.mTags}>
                  {data.why.matchedSkills.map(sk=><span key={sk} className={s.have}>{sk}</span>)}
                </div>
              </div>
            )}
            {data.why.missingSkills.length>0&&(
              <div className={s.msec}>
                <div className={s.msecLabel}>Skills to Develop</div>
                <div className={s.mTags}>
                  {data.why.missingSkills.map(sk=><span key={sk} className={s.need}>{sk}</span>)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function ResultsPage({ results, conflicts, fetchWhy, whyData, whyLoading, reset, setPage }) {
  const [openWhy, setOpenWhy] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  function handleWhy(careerName) { fetchWhy(careerName); setOpenWhy(true); }

  async function exportPDF() {
    setPdfLoading(true);
    try {
      const { default: jsPDF } = await import("jspdf");
      const doc = new jsPDF({ orientation:"portrait", unit:"mm", format:"a4" });
      const W = 210, H = 297, M = 16, CW = W - M*2;
      let y = 0;

      // ── helpers ──────────────────────────────────────────────────────────
      function checkPage(needed = 14) {
        if (y + needed > H - 16) { doc.addPage(); y = 18; }
      }
      function hr(yy, r=180,g=180,b=180) {
        doc.setDrawColor(r,g,b); doc.setLineWidth(0.3);
        doc.line(M, yy, W-M, yy);
      }
      function tag(label, x, yy, bgR, bgG, bgB, fR=255, fG=255, fB=255) {
        const tw = doc.getTextWidth(label) + 6;
        doc.setFillColor(bgR, bgG, bgB);
        doc.roundedRect(x, yy-4, tw, 6, 1, 1, "F");
        doc.setFontSize(7); doc.setFont("helvetica","bold");
        doc.setTextColor(fR, fG, fB);
        doc.text(label, x+3, yy);
        return tw + 3;
      }
      function sectionTitle(title, yy) {
        doc.setFontSize(11); doc.setFont("helvetica","bold"); doc.setTextColor(40,40,40);
        doc.text(title, M, yy);
        hr(yy+2, 220,220,220);
        return yy + 7;
      }

      // ── PAGE 1: COVER ────────────────────────────────────────────────────
      // Dark header band
      doc.setFillColor(13,15,20);
      doc.rect(0, 0, W, 52, "F");

      // Gold accent bar
      doc.setFillColor(224,168,0);
      doc.rect(0, 52, W, 2, "F");

      // Logo text
      doc.setFontSize(26); doc.setFont("helvetica","bold"); doc.setTextColor(255,255,255);
      doc.text("Career", M, 24);
      doc.setTextColor(224,168,0);
      doc.text("IQ", M + doc.getTextWidth("Career") + 1, 24);

      doc.setFontSize(10); doc.setFont("helvetica","normal"); doc.setTextColor(160,160,160);
      doc.text("Expert System  ·  Rule-Based AI  ·  Fuzzy Logic", M, 33);

      doc.setFontSize(8); doc.setTextColor(120,120,120);
      doc.text("Generated on " + new Date().toLocaleDateString("en-IN", {weekday:"long",year:"numeric",month:"long",day:"numeric"}), M, 44);

      y = 66;

      // Top career hero card
      const top = results[0];
      doc.setFillColor(245,245,245); doc.setDrawColor(220,220,220); doc.setLineWidth(0.4);
      doc.roundedRect(M, y, CW, 38, 3, 3, "FD");

      doc.setFontSize(8); doc.setFont("helvetica","bold"); doc.setTextColor(180,130,0);
      doc.text("★  BEST MATCH", M+6, y+8);

      doc.setFontSize(16); doc.setFont("helvetica","bold"); doc.setTextColor(20,20,20);
      doc.text(top.icon + "  " + top.name, M+6, y+17);

      doc.setFontSize(9); doc.setFont("helvetica","normal"); doc.setTextColor(100,100,100);
      doc.text(top.description, M+6, y+25, { maxWidth: CW-12 });

      // Confidence badge
      doc.setFillColor(224,168,0); doc.roundedRect(W-M-28, y+6, 26, 10, 2, 2, "F");
      doc.setFontSize(14); doc.setFont("helvetica","bold"); doc.setTextColor(13,15,20);
      doc.text(top.confidence+"%", W-M-15, y+14, { align:"center" });
      doc.setFontSize(6); doc.setFont("helvetica","normal");
      doc.text("MATCH", W-M-15, y+19, { align:"center" });

      y += 46;

      // ── SECTION 1: ALL CAREER RANKINGS ───────────────────────────────────
      checkPage(10);
      y = sectionTitle("Career Match Rankings", y);

      results.forEach((r, i) => {
        checkPage(22);
        const isTop = i === 0;
        const barW = CW - 70;

        // Row background for top pick
        if (isTop) { doc.setFillColor(255,252,235); doc.roundedRect(M, y-4, CW, 20, 2,2,"F"); }

        // Rank number
        doc.setFontSize(11); doc.setFont("helvetica","bold");
        doc.setTextColor(isTop?180:150, isTop?130:150, isTop?0:150);
        doc.text(String(i+1), M+3, y+6);

        // Career name
        doc.setFontSize(10); doc.setFont("helvetica", isTop?"bold":"normal"); doc.setTextColor(20,20,20);
        doc.text(r.name, M+12, y+6);

        // Field tag
        doc.setFontSize(7); doc.setFont("helvetica","normal"); doc.setTextColor(100,100,100);
        doc.text(r.field, M+12, y+12);

        // Confidence % right side
        doc.setFontSize(11); doc.setFont("helvetica","bold"); doc.setTextColor(20,20,20);
        doc.text(r.confidence+"%", W-M-4, y+6, {align:"right"});

        // Progress bar
        doc.setFillColor(230,230,230);
        doc.roundedRect(M+12, y+13, barW, 3, 1,1,"F");
        const fillColor = hexToRgb(r.color);
        doc.setFillColor(fillColor.r, fillColor.g, fillColor.b);
        doc.roundedRect(M+12, y+13, barW*(r.confidence/100), 3, 1,1,"F");

        // Salary & CF info
        doc.setFontSize(7); doc.setFont("helvetica","normal"); doc.setTextColor(120,120,120);
        doc.text(`Entry: ${r.salary.entry}  ·  Senior: ${r.salary.senior}`, W-M-4, y+12, {align:"right"});
        if (r.ruleFired) {
          doc.setTextColor(0,140,100);
          doc.text(`${r.ruleId} fired · CF=${r.cf}`, M+12, y+19);
        }

        y += isTop ? 22 : 20;
        if (i < results.length-1) { doc.setDrawColor(235,235,235); doc.setLineWidth(0.2); doc.line(M, y-2, W-M, y-2); }
      });

      y += 4;

      // ── SECTION 2: CONFLICT RESOLUTION LOG ───────────────────────────────
      if (conflicts.length > 0) {
        checkPage(20);
        y = sectionTitle("Conflict Resolution Log", y);
        doc.setFillColor(255,252,235); doc.roundedRect(M, y-2, CW, conflicts.length*9+6, 2,2,"F");
        conflicts.forEach((c, i) => {
          doc.setFontSize(8); doc.setFont("helvetica","normal"); doc.setTextColor(80,80,80);
          doc.text(`${c.career}:`, M+4, y+5);
          doc.setTextColor(120,120,120);
          doc.text(`Rule ${c.winner.ruleId} (CF=${c.winner.cf}) won over Rule ${c.overridden.ruleId} (CF=${c.overridden.cf}) — highest certainty factor selected`, M+40, y+5, {maxWidth:CW-44});
          y += 9;
        });
        y += 6;
      }

      // ── SECTION 3: INFERENCE DETAILS PER CAREER ──────────────────────────
      checkPage(20);
      doc.addPage(); y = 18;
      y = sectionTitle("Inference Details", y);

      results.forEach((r, i) => {
        checkPage(60);

        // Career header
        doc.setFillColor(248,248,248); doc.setDrawColor(210,210,210);
        doc.roundedRect(M, y, CW, 11, 2,2,"FD");
        doc.setFontSize(10); doc.setFont("helvetica","bold"); doc.setTextColor(20,20,20);
        doc.text(`${i+1}. ${r.icon}  ${r.name}`, M+4, y+8);
        doc.setFontSize(9); doc.setTextColor(100,100,100);
        doc.text(`${r.confidence}% match`, W-M-4, y+8, {align:"right"});
        y += 14;

        // Rule section
        if (r.ruleReason) {
          doc.setFontSize(8); doc.setFont("helvetica","bold"); doc.setTextColor(60,60,60);
          doc.text("Production Rule:", M+2, y);
          doc.setFont("helvetica","normal"); doc.setTextColor(80,80,80);
          doc.text(r.ruleReason, M+38, y, {maxWidth:CW-40});
          y += 7;
          doc.setFont("helvetica","normal"); doc.setTextColor(100,100,100);
          const status = r.ruleFired
            ? `✓ Rule ${r.ruleId} FIRED  ·  Certainty Factor: ${r.cf}  ·  CF contributes ${(r.cf*0.45*100).toFixed(0)}% to final score`
            : `✗ No rule fired — scored via frame-slot overlap only`;
          doc.setTextColor(r.ruleFired?0:150, r.ruleFired?130:100, r.ruleFired?80:100);
          doc.text(status, M+2, y); y += 6;
        }

        // Required skills as tags
        doc.setFontSize(7); doc.setFont("helvetica","bold"); doc.setTextColor(60,60,60);
        doc.text("Required Skills:", M+2, y); y += 5;
        let tx = M+2;
        r.required_skills.forEach(sk => {
          if (tx + doc.getTextWidth(sk) + 10 > W-M) { tx=M+2; y+=7; checkPage(10); }
          tx += tag(sk, tx, y, 40,40,40);
        });
        y += 10;

        // Salary row
        doc.setFontSize(8); doc.setFont("helvetica","normal"); doc.setTextColor(100,100,100);
        doc.text(`Salary range:  Entry ${r.salary.entry}  ·  Mid ${r.salary.mid}  ·  Senior ${r.salary.senior}`, M+2, y);
        y += 10;

        if (i < results.length-1) { hr(y-2); }
      });

      // ── SECTION 4: SKILL GAPS & LEARNING PATH ────────────────────────────
      checkPage(20);
      doc.addPage(); y = 18;
      y = sectionTitle("Learning Paths & Next Steps", y);

      results.slice(0,3).forEach((r, i) => {
        checkPage(50);
        doc.setFontSize(10); doc.setFont("helvetica","bold"); doc.setTextColor(20,20,20);
        doc.text(`${r.name}`, M, y); y += 6;
        r.learn.forEach((step, si) => {
          checkPage(8);
          doc.setFontSize(8); doc.setFont("helvetica","normal"); doc.setTextColor(80,80,80);
          doc.text(`${si+1}.  ${step}`, M+4, y); y += 6;
        });
        y += 4;
        if (i < 2) { hr(y-2); y += 4; }
      });

      // ── FOOTER ON ALL PAGES ───────────────────────────────────────────────
      const pages = doc.internal.getNumberOfPages();
      for (let p = 1; p <= pages; p++) {
        doc.setPage(p);
        doc.setFillColor(13,15,20); doc.rect(0, H-10, W, 10, "F");
        doc.setFontSize(7); doc.setFont("helvetica","normal"); doc.setTextColor(120,120,120);
        doc.text("CareerIQ Expert System — AI Career Guidance", M, H-4);
        doc.text(`Page ${p} of ${pages}`, W-M, H-4, {align:"right"});
      }

      doc.save("CareerIQ-Report.pdf");
    } catch(e) { console.error("PDF error:", e); alert("PDF generation failed: " + e.message); }
    finally { setPdfLoading(false); }
  }

  // Helper: convert hex color to RGB
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16)||100;
    const g = parseInt(hex.slice(3,5),16)||100;
    const b = parseInt(hex.slice(5,7),16)||100;
    return {r,g,b};
  }

  return (
    <div className={`${s.page} animate-in`}>
      <div className={s.header}>
        <div><h2>Your career <em>matches</em></h2><p>Ranked by confidence score · Click "Ask Why" for reasoning explanation</p></div>
        <div className={s.hactions}>
          <button className={s.pdfBtn} onClick={exportPDF} disabled={pdfLoading}>
            {pdfLoading?"Generating…":"📄 Export PDF"}
          </button>
        </div>
      </div>

      {conflicts.length>0&&(
        <div className={s.conflictBox}>
          <div className={s.conflictTitle}>⚡ Conflict Resolution Applied</div>
          {conflicts.map((c,i)=>(
            <div key={i} className={s.conflict}>
              <span className={s.conflictCareer}>{c.career}:</span>
              <span>{c.winner.ruleId} (CF={c.winner.cf}) won over {c.overridden.ruleId} (CF={c.overridden.cf})</span>
            </div>
          ))}
        </div>
      )}

      <div className={s.list}>
        {results.map((r,i)=>(
          <div key={r.name} className={`${s.card} ${i===0?s.top:""}`}>
            {i===0&&<div className={s.bestBadge}>★ Best Match</div>}
            <div className={s.cardBody}>
              <div className={s.left2}>
                <div className={s.ch}>
                  <div className={s.ci} style={{background:r.color+"22"}}>{r.icon}</div>
                  <div>
                    <div className={s.ct}>{r.name}</div>
                    <div className={s.cf3}>{r.field}</div>
                  </div>
                  <div className={s.sc}><div className={s.sp}>{r.confidence}%</div><div className={s.ss}>match</div></div>
                </div>
                <div className={s.bar}><div className={s.fill} style={{width:r.confidence+"%",background:r.color}}/></div>
                <p className={s.desc}>{r.description}</p>
                <div className={s.tags}>{r.required_skills.map(sk=><span key={sk} className={s.tag}>{sk}</span>)}</div>
                <div className={s.meta}>
                  <span>Entry: <strong>{r.salary.entry}</strong></span>
                  <span>Senior: <strong>{r.salary.senior}</strong></span>
                  {r.ruleFired&&<span className={s.rf}>✓ {r.ruleId} fired · CF={r.cf}</span>}
                </div>
                <div className={s.cardActions}>
                  <button className={s.whyBtn} onClick={()=>handleWhy(r.name)}>💬 Ask Why</button>
                </div>
              </div>
              <div className={s.radarWrap}>
                <div className={s.radarLabel}>Profile Match</div>
                <RadarChart data={r.radar} color={r.color} size={160}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.actions}>
        <button className={s.ghost} onClick={reset}>↺ Start Over</button>
        <button className={s.primary} onClick={()=>setPage("roadmap")}>View My Roadmap →</button>
      </div>

      {openWhy&&<WhyModal data={whyData} loading={whyLoading} onClose={()=>setOpenWhy(false)}/>}
    </div>
  );
}
