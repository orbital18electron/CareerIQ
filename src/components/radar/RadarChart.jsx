"use client";
import { useEffect, useRef } from "react";
export default function RadarChart({ data, color="#e0a800", size=200 }) {
  const ref = useRef(null);
  useEffect(()=>{
    const canvas = ref.current; if(!canvas) return;
    const ctx = canvas.getContext("2d");
    const cx=size/2, cy=size/2, r=size*0.38;
    const dims=Object.keys(data); const n=dims.length;
    const isDark = !document.documentElement.classList.contains("light");
    const gridColor = isDark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)";
    const textColor = isDark?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)";
    ctx.clearRect(0,0,size,size);
    // Draw grid circles
    [0.25,0.5,0.75,1].forEach(t=>{
      ctx.beginPath();
      dims.forEach((_, i)=>{
        const a = (i/n)*Math.PI*2 - Math.PI/2;
        const x=cx+Math.cos(a)*r*t, y=cy+Math.sin(a)*r*t;
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      });
      ctx.closePath(); ctx.strokeStyle=gridColor; ctx.lineWidth=1; ctx.stroke();
    });
    // Draw axes
    dims.forEach((_,i)=>{
      const a=(i/n)*Math.PI*2-Math.PI/2;
      ctx.beginPath(); ctx.moveTo(cx,cy);
      ctx.lineTo(cx+Math.cos(a)*r, cy+Math.sin(a)*r);
      ctx.strokeStyle=gridColor; ctx.lineWidth=1; ctx.stroke();
    });
    // Draw data polygon
    ctx.beginPath();
    dims.forEach((dim,i)=>{
      const a=(i/n)*Math.PI*2-Math.PI/2;
      const val=(data[dim]||0)/100;
      const x=cx+Math.cos(a)*r*val, y=cy+Math.sin(a)*r*val;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.fillStyle=color+"33"; ctx.fill();
    ctx.strokeStyle=color; ctx.lineWidth=2; ctx.stroke();
    // Draw dots
    dims.forEach((dim,i)=>{
      const a=(i/n)*Math.PI*2-Math.PI/2;
      const val=(data[dim]||0)/100;
      const x=cx+Math.cos(a)*r*val, y=cy+Math.sin(a)*r*val;
      ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2);
      ctx.fillStyle=color; ctx.fill();
    });
    // Draw labels
    ctx.font="10px DM Sans,sans-serif"; ctx.fillStyle=textColor; ctx.textAlign="center";
    const labels={"interests":"Interests","skills":"Skills","subjects":"Subjects","grades":"Grades","environment":"Environment"};
    dims.forEach((dim,i)=>{
      const a=(i/n)*Math.PI*2-Math.PI/2;
      const x=cx+Math.cos(a)*(r+18), y=cy+Math.sin(a)*(r+18)+4;
      ctx.fillText(labels[dim]||dim, x, y);
    });
  },[data,color,size]);
  return <canvas ref={ref} width={size} height={size}/>;
}
