// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  category: "Solar" | "Biogas" | "Instrumentation" | "Mapping" | "Other";
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
    title: "Data Logger System",
    category: "Instrumentation",
    description:
      "Designed and built an IoT-based data logger for monitoring energy parameters in renewable energy systems, enabling real-time data acquisition and analysis.",
    tools: ["Python", "Arduino", "Excel"],
    github: "#",
    thumbnail: "/images/project-1.jpg",
  },
  {
    id: "2",
    title: "Polredar [Placeholder]",
    category: "Other",
    description:
      "Placeholder description for this project. Update with actual project details, problem statement, and outcomes achieved.",
    tools: ["MATLAB", "Excel"],
    report: "#",
    thumbnail: "/images/project-2.jpg",
  },
  {
    id: "3",
    title: "Biogas Mapping",
    category: "Biogas",
    description:
      "Conducted spatial mapping of biogas potential across a target region using GIS tools, identifying high-priority areas for renewable energy development.",
    tools: ["ArcGIS", "Excel", "Python"],
    report: "#",
    thumbnail: "/images/project-3.jpg",
  },
  {
    id: "4",
    title: "Temperature Monitoring Project",
    category: "Instrumentation",
    description:
      "Developed a temperature monitoring system for solar panel performance evaluation, tracking thermal behavior under varying environmental conditions.",
    tools: ["Arduino", "Python", "Excel"],
    github: "#",
    thumbnail: "/images/project-4.jpg",
  },
  {
    id: "5",
    title: "Avo Meter Calibration",
    category: "Instrumentation",
    description:
      "Performed precision calibration of analog and digital multimeters used in energy measurement lab, ensuring measurement accuracy within industry standards.",
    tools: ["Excel", "Laboratory Equipment"],
    report: "#",
    thumbnail: "/images/project-5.jpg",
  },
  {
    id: "6",
    title: "Biogas Production Study",
    category: "Biogas",
    description:
      "Analyzed biogas production rates from organic waste substrates, measuring methane yield and optimizing digester parameters for maximum output.",
    tools: ["Excel", "Python", "Statistical Analysis"],
    report: "#",
    thumbnail: "/images/project-6.jpg",
  },
  {
    id: "7",
    title: "Baling-Baling (Wind Turbine) Study",
    category: "Other",
    description:
      "Studied small-scale horizontal-axis wind turbine blade performance, analyzing rotational efficiency and power output under controlled conditions.",
    tools: ["MATLAB", "AutoCAD", "Excel"],
    report: "#",
    thumbnail: "/images/project-7.jpg",
  },
  {
    id: "8",
    title: "Pastel CAD Design",
    category: "Other",
    description:
      "Created detailed technical CAD drawings for renewable energy system components, following engineering drafting standards and specifications.",
    tools: ["AutoCAD", "SketchUp"],
    report: "#",
    thumbnail: "/images/project-8.jpg",
  },
];