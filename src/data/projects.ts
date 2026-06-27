// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  category: "Solar" | "Wind" | "Energy Audit" | "Simulation" | "Other";
  description: string;
  tools: string[];
  github?: string;
  report?: string;
  demo?: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Rooftop Solar PV System Design",
    category: "Solar",
    description:
      "Designed a 10 kWp rooftop photovoltaic system for a commercial building, including load analysis, panel layout, and financial feasibility study.",
    tools: ["PVsyst", "AutoCAD", "Excel"],
    github: "#",
    thumbnail: "/images/project-1.jpg",
  },
  {
    id: "2",
    title: "Campus Energy Audit",
    category: "Energy Audit",
    description:
      "Conducted a full energy audit of a university building, identifying inefficiencies and recommending retrofitting measures with projected 30% energy savings.",
    tools: ["HOMER Pro", "Excel", "Python"],
    report: "#",
    thumbnail: "/images/project-2.jpg",
  },
  {
    id: "3",
    title: "Hybrid Microgrid Simulation",
    category: "Simulation",
    description:
      "Simulated a solar-wind-battery hybrid microgrid for a remote village using HOMER Pro, optimizing for cost of energy and reliability.",
    tools: ["HOMER Pro", "MATLAB", "Excel"],
    report: "#",
    thumbnail: "/images/project-3.jpg",
  },
];