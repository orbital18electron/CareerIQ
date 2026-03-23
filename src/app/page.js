"use client";
import { useCareerQuiz } from "@/hooks/useCareerQuiz";
import Header from "@/components/Header";
import LandingPage from "@/components/landing/LandingPage";
import WizardPage from "@/components/wizard/WizardPage";
import ResultsPage from "@/components/results/ResultsPage";
import ConceptsPage from "@/components/concepts/ConceptsPage";
import KBBrowser from "@/components/kbbrowser/KBBrowser";
import RoadmapPage from "@/components/roadmap/RoadmapPage";
import styles from "./page.module.css";

export default function Home() {
  const quiz = useCareerQuiz();
  const topResult = quiz.results[0] || null;
  const showResults = quiz.step===4 && quiz.results.length>0;

  return (
    <>
      {quiz.page!=="landing" && (
        <Header page={quiz.page} setPage={quiz.setPage} hasResults={quiz.hasResults}/>
      )}
      <main className={styles.main}>
        {quiz.page==="landing"   && <LandingPage onStart={()=>quiz.setPage("wizard")}/>}
        {quiz.page==="wizard"    && !showResults && (
          <WizardPage step={quiz.step} answers={quiz.answers} toggleChip={quiz.toggleChip}
            setRadio={quiz.setRadio} goNext={quiz.goNext} goBack={quiz.goBack}
            runInference={quiz.runInference} loading={quiz.loading}
            results={quiz.results} reset={quiz.reset} setPage={quiz.setPage}/>
        )}
        {quiz.page==="wizard"    && showResults && (
          <ResultsPage results={quiz.results} conflicts={quiz.conflicts}
            fetchWhy={quiz.fetchWhy} whyData={quiz.whyData} whyLoading={quiz.whyLoading}
            reset={quiz.reset} setPage={quiz.setPage}/>
        )}
        {quiz.page==="concepts"  && <ConceptsPage setPage={quiz.setPage}/>}
        {quiz.page==="kbbrowser" && <KBBrowser/>}
        {quiz.page==="roadmap"   && <RoadmapPage topResult={topResult} roadmap={quiz.roadmap}/>}
        {quiz.error && <div className={styles.error}>⚠️ {quiz.error}</div>}
      </main>
    </>
  );
}
