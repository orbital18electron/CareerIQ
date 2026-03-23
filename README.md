# CareerIQ — Expert System v2.0

An AI-powered rule-based career guidance expert system built with **Next.js 14**.

## Quick Start
```bash
npm install
npm run dev          # → http://localhost:3000
```
Test runner: http://localhost:3000/test

## Project Structure
```
src/
├── app/
│   ├── api/inference/route.js   POST: runs inference engine
│   ├── api/roadmap/route.js     GET:  returns career roadmap
│   ├── api/why/route.js         POST: explains a career recommendation
│   ├── test/page.js             Test runner (server component)
│   ├── globals.css              Design tokens (dark/light)
│   ├── layout.js
│   └── page.js                  Main app entry
├── components/
│   ├── Header.jsx               Nav + theme toggle
│   ├── landing/LandingPage      Welcome screen
│   ├── wizard/WizardPage        4-step quiz + live inference trace
│   ├── results/ResultsPage      Results with radar chart + Ask Why modal
│   ├── roadmap/RoadmapPage      Year plan, checklist, projects, resources
│   ├── concepts/ConceptsPage    AI concepts explainer + architecture
│   ├── kbbrowser/KBBrowser      Interactive knowledge base explorer
│   └── radar/RadarChart         Canvas-based spider chart
├── hooks/
│   └── useCareerQuiz.js         All quiz state + API calls
└── lib/
    ├── knowledgeBase.js         17 career frames
    ├── rules.js                 17 IF-THEN rules with CF values
    ├── inferenceEngine.js       Fuzzy logic + CF scoring + chaining
    ├── roadmapKB.js             Per-career roadmap data
    └── testCases.js             12 validation test cases
```

## API Endpoints
- `POST /api/inference` — runs expert system, returns ranked results
- `GET  /api/roadmap?career=X` — returns 4-year roadmap for a career
- `POST /api/why` — explains reasoning for a specific career

## AI Concepts Implemented
| Concept | Where |
|---|---|
| Knowledge Frames | `lib/knowledgeBase.js` |
| Production Rules + CF | `lib/rules.js` |
| Forward Chaining | `lib/inferenceEngine.js → forwardChain()` |
| Backward Chaining | `lib/inferenceEngine.js → backwardTrace()` |
| Fuzzy Logic | `lib/inferenceEngine.js → fuzzyMembership()` |
| Certainty Factors | `lib/rules.js` (cf field on every rule) |
| Conflict Resolution | `lib/inferenceEngine.js → resolveConflicts()` |
| Explanation Facility | `api/why/route.js` + ResultsPage Ask Why modal |
| Working Memory | `hooks/useCareerQuiz.js` (answers state) |

## Deploy to Vercel
```bash
git init && git add . && git commit -m "CareerIQ v2"
# Push to GitHub, then import on vercel.com
```
