// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  category: "Solar" | "Bioenergy" | "Instrumentation" | "Other";
  description: string;
  tools: string[];
  report?: string;
  demo?: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Data Logger Systems for real-time Monitoring",
    category: "Instrumentation",
    description:
      "Designed and developed a microcontroller-based data logger to automate real-time voltage monitoring of an HHO generator.",
    tools: ["C/C++", "Arduino IDE", "Arduino Uno", "Voltage Sensor Module", "SD Card Module"],
    thumbnail: "/images/project-1.jpg"
  },
  {
    id: "2",
    title: "Biogas Potential Mapping Using GIS",
    category: "Bioenergy",
    description:
      "Developed a GIS-based biogas potential map to identify high-priority regions for renewable energy development in West Sumatra.",
    tools: ["QGIS 3.14", "Geographic Information System (GIS)"],
    thumbnail: "/images/project-2.jpg"
  },
  {
    id: "3",
    title: "Automatic Temperature Monitoring & Control System",
    category: "Instrumentation",
    description:
      "Developed an Arduino-based automatic temperature monitoring and control system capable of measuring, displaying, and regulating temperature in real time.",
    tools: ["Arduino IDE", "DS18B20 Temperature Sensor", "Omron MY2N Relay", "C/C++"],
    thumbnail: "/images/project-3.jpg"
  },
  {
    id: "4",
    title: "Solar Panel-Based Building Design",
    category: "Solar",
    description:
      "Designed a conceptual building integrated with rooftop photovoltaic (PV) systems to demonstrate the application of renewable energy in modern building design.",
    tools: ["AutoCAD", "Technical Drawing", "Photovoltaic (PV) System Concept"],
    thumbnail: "/images/project-4.jpg"
  },
  {
    id: "5",
    title: "Small-Scale Biogas Installation for Livestock Waste Utilization",
    category: "Bioenergy",
    description:
      "Designed and implemented a small-scale biogas installation to convert cattle manure from the Politeknik Negeri Jember livestock farm into renewable cooking fuel.",
    tools: ["Biogas Digester", "Renewable Energy System", "Waste-to-Energy Technology"],
    thumbnail: "/images/project-5.jpg"
  },
  {
    id: "6",
    title: "Coffee Husk Biomass Briquette Production",
    category: "Bioenergy",
    description:
      "Developed biomass briquettes from coffee husk waste to transform agricultural by-products into a renewable and marketable solid fuel.",
    tools: ["Biomass Processing Equipment", "Compression Machine"],
    thumbnail: "/images/project-6.jpg"
  },
  {
    id: "7",
    title: "Digital Avometer Development Using Arduino",
    category: "Instrumentation",
    description:
      "Designed and developed a digital avometer capable of measuring voltage and current using Arduino Uno, INA219, and voltage sensors.",
    tools: ["Arduino IDE", "C/C++", "Eletrical Circuit Design"],
    thumbnail: "/images/project-7.jpg"
  }
];