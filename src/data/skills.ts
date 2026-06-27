// src/data/skills.ts

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Energy Systems",
    skills: [
      "PV System Design",
      "Load Analysis",
      "Grid Integration",
      "Energy Storage",
      "Microgrid Planning",
    ],
  },
  {
    category: "Engineering Tools",
    skills: [
      "HOMER Pro",
      "PVsyst",
      "AutoCAD",
      "MATLAB / Simulink",
      "Python",
    ],
  },
  {
    category: "Data & Analysis",
    skills: [
      "Excel (Advanced)",
      "Power BI",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    category: "Professional",
    skills: [
      "Technical Writing",
      "Project Documentation",
      "Field Survey",
      "Feasibility Study",
    ],
  },
];