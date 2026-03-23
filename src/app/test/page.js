// src/app/test/page.js
// Server component — runs test cases directly without going through HTTP
import { runInference } from "@/lib/inferenceEngine";
import { TEST_CASES } from "@/lib/testCases";

export const metadata = { title: "CareerIQ — Test Runner" };

function Badge({ pass }) {
  return (
    <span style={{
      display:"inline-flex",alignItems:"center",gap:4,
      padding:"3px 10px",borderRadius:100,fontSize:12,fontWeight:700,
      background: pass ? "rgba(62,207,176,0.15)" : "rgba(248,113,113,0.15)",
      color: pass ? "#0e9e83" : "#d94f4f",
      border: `1px solid ${pass?"rgba(62,207,176,0.35)":"rgba(248,113,113,0.35)"}`,
    }}>
      {pass ? "✓ PASS" : "✗ FAIL"}
    </span>
  );
}

export default function TestPage() {
  const results = TEST_CASES.map((tc) => {
    const { results } = runInference(tc.facts);
    const top = results[0]?.name || "No result";
    const pass = top === tc.expected;
    const confidence = results[0]?.confidence || 0;
    return { ...tc, top, pass, confidence, allResults: results.slice(0,3) };
  });

  const passCount = results.filter((r) => r.pass).length;
  const total = results.length;
  const pct = Math.round((passCount / total) * 100);

  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:"#0d0f14", minHeight:"100vh", color:"#eef0f6", padding:"2rem" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ display:"flex",alignItems:"center",gap:16,marginBottom:"2rem" }}>
          <a href="/" style={{ color:"#7a8099",textDecoration:"none",fontSize:13 }}>← Back to App</a>
        </div>
        <h1 style={{ fontFamily:"'Fraunces',serif",fontSize:34,fontWeight:700,marginBottom:8 }}>
          Test Case Runner
        </h1>
        <p style={{ color:"#7a8099",fontSize:15,marginBottom:"2rem" }}>
          Validates the inference engine against {total} predefined test cases
        </p>

        {/* Summary */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:"2rem" }}>
          {[
            { label:"Tests Passed", val:`${passCount} / ${total}`, color:"#3ecfb0" },
            { label:"Pass Rate", val:`${pct}%`, color: pct===100?"#3ecfb0":pct>=80?"#e0a800":"#d94f4f" },
            { label:"Rules Defined", val:"17", color:"#a78bfa" },
          ].map((s)=>(
            <div key={s.label} style={{ background:"#161922",border:"1px solid rgba(255,255,255,0.1)",borderRadius:14,padding:"1.25rem" }}>
              <div style={{ fontSize:11,color:"#7a8099",textTransform:"uppercase",letterSpacing:1,marginBottom:6 }}>{s.label}</div>
              <div style={{ fontFamily:"'Fraunces',serif",fontSize:28,fontWeight:700,color:s.color }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Test Cases Table */}
        <div style={{ background:"#161922",border:"1px solid rgba(255,255,255,0.1)",borderRadius:18,overflow:"hidden" }}>
          <table style={{ width:"100%",borderCollapse:"collapse",fontSize:13 }}>
            <thead>
              <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
                {["ID","Test Name","Expected","Got","Confidence","Status"].map((h)=>(
                  <th key={h} style={{ padding:"12px 16px",textAlign:"left",fontSize:11,letterSpacing:1,textTransform:"uppercase",color:"#7a8099",fontWeight:600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((r, i)=>(
                <tr key={r.id} style={{ borderBottom: i<results.length-1?"1px solid rgba(255,255,255,0.06)":"none" }}>
                  <td style={{ padding:"14px 16px",color:"#e0a800",fontWeight:600 }}>{r.id}</td>
                  <td style={{ padding:"14px 16px" }}>
                    <div style={{ fontWeight:500,color:"#eef0f6" }}>{r.name}</div>
                    <div style={{ color:"#7a8099",fontSize:11,marginTop:2 }}>{r.description}</div>
                  </td>
                  <td style={{ padding:"14px 16px",color:"#7a8099" }}>{r.expected}</td>
                  <td style={{ padding:"14px 16px",color: r.pass?"#3ecfb0":"#f87171",fontWeight:500 }}>{r.top}</td>
                  <td style={{ padding:"14px 16px" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                      <div style={{ flex:1,height:6,background:"#1e2330",borderRadius:3,overflow:"hidden" }}>
                        <div style={{ height:"100%",width:r.confidence+"%",background: r.pass?"#3ecfb0":"#f87171",borderRadius:3 }}/>
                      </div>
                      <span style={{ fontSize:12,color:"#7a8099",minWidth:32 }}>{r.confidence}%</span>
                    </div>
                  </td>
                  <td style={{ padding:"14px 16px" }}><Badge pass={r.pass}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* All Careers Breakdown */}
        <div style={{ marginTop:"2rem" }}>
          <h2 style={{ fontFamily:"'Fraunces',serif",fontSize:22,fontWeight:600,marginBottom:"1rem" }}>Top-3 Breakdown per Test</h2>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            {results.map((r)=>(
              <div key={r.id} style={{ background:"#161922",border:`1px solid ${r.pass?"rgba(62,207,176,0.3)":"rgba(248,113,113,0.2)"}`,borderRadius:14,padding:"1rem" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
                  <span style={{ fontWeight:600,fontSize:14,color:"#eef0f6" }}>{r.id}: {r.name}</span>
                  <Badge pass={r.pass}/>
                </div>
                {r.allResults.map((res,i)=>(
                  <div key={res.name} style={{ display:"flex",justifyContent:"space-between",padding:"4px 0",fontSize:12,borderBottom:i<r.allResults.length-1?"1px solid rgba(255,255,255,0.05)":"none" }}>
                    <span style={{ color: i===0?"#eef0f6":"#7a8099" }}>{i+1}. {res.name}</span>
                    <span style={{ color: i===0?"#e0a800":"#7a8099" }}>{res.confidence}%</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign:"center",marginTop:"3rem",paddingTop:"2rem",borderTop:"1px solid rgba(255,255,255,0.07)",color:"#7a8099",fontSize:13 }}>
          CareerIQ Expert System — Test Suite v2.0 &nbsp;·&nbsp; {passCount}/{total} passing
        </div>
      </div>
    </div>
  );
}
