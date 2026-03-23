"use client";
import { useState, useCallback } from "react";
const INIT = { interests:[], skills:[], subjects:[], grades:null, env:null };
export function useCareerQuiz() {
  const [step,setStep]           = useState(0);
  const [page,setPage]           = useState("landing");
  const [answers,setAnswers]     = useState(INIT);
  const [results,setResults]     = useState([]);
  const [conflicts,setConflicts] = useState([]);
  const [roadmap,setRoadmap]     = useState(null);
  const [topCareer,setTopCareer] = useState(null);
  const [loading,setLoading]     = useState(false);
  const [error,setError]         = useState(null);
  const [whyData,setWhyData]     = useState(null);
  const [whyLoading,setWhyLoading] = useState(false);

  const toggleChip = useCallback((field, value) => {
    setAnswers(prev => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(value)?arr.filter(v=>v!==value):[...arr,value] };
    });
  }, []);
  const setRadio = useCallback((field, value) => setAnswers(prev=>({...prev,[field]:value})), []);
  const goNext = useCallback(()=>setStep(s=>s+1),[]);
  const goBack = useCallback(()=>setStep(s=>s-1),[]);

  const runInference = useCallback(async()=>{
    setLoading(true); setError(null);
    try {
      const res  = await fetch("/api/inference",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(answers)});
      if(!res.ok) throw new Error("Inference failed");
      const data = await res.json();
      setResults(data.results); setConflicts(data.conflicts||[]); setTopCareer(data.topCareer); setStep(4);
      if(data.topCareer){
        const rm = await fetch(`/api/roadmap?career=${encodeURIComponent(data.topCareer)}`);
        if(rm.ok) setRoadmap((await rm.json()).roadmap);
      }
    } catch(e){ setError(e.message); } finally{ setLoading(false); }
  },[answers]);

  const fetchWhy = useCallback(async(careerName)=>{
    setWhyLoading(true); setWhyData(null);
    try {
      const res = await fetch("/api/why",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({careerName,facts:answers})});
      if(res.ok) setWhyData(await res.json());
    } catch(_){} finally{ setWhyLoading(false); }
  },[answers]);

  const reset = useCallback(()=>{
    setStep(0); setPage("wizard"); setAnswers(INIT);
    setResults([]); setConflicts([]); setRoadmap(null);
    setTopCareer(null); setError(null); setWhyData(null);
  },[]);

  return { step, page, setPage, answers, toggleChip, setRadio, goNext, goBack,
    runInference, results, conflicts, roadmap, topCareer, loading, error,
    whyData, whyLoading, fetchWhy, reset, hasResults:results.length>0 };
}
