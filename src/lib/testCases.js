// src/lib/testCases.js
// ─── PREDEFINED TEST CASES ────────────────────────────────────────────────────
// Each test case has: a name, input facts, and the expected top career.
// Used by the /test page to validate the inference engine.

export const TEST_CASES = [
  {
    id:"TC1", name:"The Coder",
    description:"Strong interest in coding and programming skills — classic software engineer profile",
    facts:{ interests:["coding","building"], skills:["programming","logic","mathematics"], subjects:["cs","math_sub"], grades:"excellent", env:"office" },
    expected:"Software Engineer",
  },
  {
    id:"TC2", name:"The Data Nerd",
    description:"Data analysis interest combined with maths — should resolve to Data Scientist",
    facts:{ interests:["data","science"], skills:["mathematics","statistics","research"], subjects:["math_sub","cs"], grades:"good", env:"lab" },
    expected:"Data Scientist",
  },
  {
    id:"TC3", name:"The AI Builder",
    description:"Coding + data interests with strong maths — triggers AI/ML Engineer rule",
    facts:{ interests:["coding","data","science"], skills:["programming","mathematics","logic"], subjects:["cs","math_sub","physics"], grades:"excellent", env:"office" },
    expected:"AI / ML Engineer",
  },
  {
    id:"TC4", name:"The Healer",
    description:"Helping people with biology knowledge — should match Doctor",
    facts:{ interests:["helping","science"], skills:["biology_skill","empathy","research"], subjects:["biology_sub","chemistry"], grades:"excellent", env:"clinic" },
    expected:"Doctor / Physician",
  },
  {
    id:"TC5", name:"The Debater",
    description:"Debating interest with strong communication — Law career",
    facts:{ interests:["debating","writing","helping"], skills:["communication","writing_skill","logic"], subjects:["social","literature"], grades:"good", env:"office" },
    expected:"Lawyer",
  },
  {
    id:"TC6", name:"The Creative",
    description:"Art interest with creativity skill — should match Graphic Designer",
    facts:{ interests:["art","coding"], skills:["creativity","spatial","communication"], subjects:["arts_sub","cs"], grades:"average", env:"office" },
    expected:"Graphic Designer / UI Designer",
  },
  {
    id:"TC7", name:"The Empath",
    description:"Helping people with empathy skill — Psychologist match",
    facts:{ interests:["helping","science","writing"], skills:["empathy","communication","research"], subjects:["psychology","social"], grades:"good", env:"clinic" },
    expected:"Psychologist / Counselor",
  },
  {
    id:"TC8", name:"The Builder",
    description:"Building and spatial reasoning with physics — Mechanical Engineer",
    facts:{ interests:["building","science"], skills:["spatial","mathematics","logic"], subjects:["physics","math_sub"], grades:"good", env:"field" },
    expected:"Mechanical Engineer",
  },
  {
    id:"TC9", name:"The Storyteller",
    description:"Writing interest combined with writing skill — Journalist",
    facts:{ interests:["writing","teaching","debating"], skills:["writing_skill","communication","research"], subjects:["literature","social"], grades:"good", env:"field" },
    expected:"Journalist / Content Creator",
  },
  {
    id:"TC10", name:"The Entrepreneur",
    description:"Business interest with leadership skill",
    facts:{ interests:["business","building"], skills:["leadership","communication","creativity"], subjects:["economics","cs"], grades:"average", env:"office" },
    expected:"Entrepreneur",
  },
  {
    id:"TC11", name:"The Green Scientist",
    description:"Nature interest with research skill — Environmental Scientist",
    facts:{ interests:["nature","science"], skills:["research","biology_skill","statistics"], subjects:["geography","biology_sub","chemistry"], grades:"good", env:"field" },
    expected:"Environmental Scientist",
  },
  {
    id:"TC12", name:"The Game Dev",
    description:"Coding + art interest — Game Developer",
    facts:{ interests:["coding","art","building"], skills:["programming","creativity","logic"], subjects:["cs","arts_sub"], grades:"good", env:"office" },
    expected:"Game Developer",
  },
  {
    id:"TC13", name:"The Chip Designer",
    description:"Building + logic + physics + CS — VLSI Engineer",
    facts:{ interests:["building","science"], skills:["logic","mathematics","spatial"], subjects:["physics","cs","math_sub"], grades:"excellent", env:"lab" },
    expected:"VLSI / Chip Design Engineer",
  },
  {
    id:"TC14", name:"The Embedded Dev",
    description:"Building + coding with logic and physics — Embedded Systems Engineer",
    facts:{ interests:["building","coding"], skills:["programming","logic","mathematics"], subjects:["physics","cs","math_sub"], grades:"good", env:"lab" },
    expected:"Embedded Systems Engineer",
  },
  {
    id:"TC15", name:"The Roboticist",
    description:"Building + maths + spatial + physics — Control Systems / Robotics",
    facts:{ interests:["building","science","coding"], skills:["mathematics","spatial","logic"], subjects:["physics","math_sub","cs"], grades:"excellent", env:"lab" },
    expected:"Control Systems / Robotics Engineer",
  },
];
