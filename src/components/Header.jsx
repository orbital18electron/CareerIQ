"use client";
import { useEffect, useState } from "react";
import s from "./Header.module.css";
export default function Header({ page, setPage, hasResults }) {
  const [isDark,setIsDark] = useState(true);
  useEffect(()=>{
    if(localStorage.getItem("theme")==="light"){document.documentElement.classList.add("light");setIsDark(false);}
  },[]);
  function toggle(){ const l=document.documentElement.classList.toggle("light"); localStorage.setItem("theme",l?"light":"dark"); setIsDark(!l); }
  const NAV = [
    {id:"landing",label:"Home"},
    {id:"wizard",label:"Career Quiz"},
    {id:"concepts",label:"AI Concepts"},
    {id:"kbbrowser",label:"Knowledge Base"},
    ...(hasResults?[{id:"roadmap",label:"My Roadmap"}]:[]),
  ];
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div className={s.logoIcon}>C</div>
        <div className={s.logoText}>Career<span>IQ</span></div>
      </div>
      <nav className={s.nav}>
        {NAV.map(n=>(
          <button key={n.id} className={`${s.btn} ${page===n.id?s.active:""}`} onClick={()=>setPage(n.id)}>{n.label}</button>
        ))}
        <a href="/test" target="_blank" className={s.btn} style={{opacity:0.6}}>Test Runner ↗</a>
      </nav>
      <button className={s.toggle} onClick={toggle} aria-label="Toggle theme">
        <span>{isDark?"🌙":"☀️"}</span>
        <div className={`${s.sw} ${!isDark?s.on:""}`}/>
      </button>
    </header>
  );
}
