// src/data/experience.ts

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Internship" | "Organization" | "Research" | "Community";
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Engineering Intern",
    organization: "PT. Placeholder Energy",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    achievements: [
      "Assisted in the design and documentation of a 50 kWp solar installation project",
      "Conducted site surveys and prepared technical reports for 3 client proposals",
      "Reduced report preparation time by 20% by creating standardized Excel templates",
    ],
  },
  {
    id: "2",
    role: "Head of Research Division",
    organization: "Renewable Energy Student Association",
    period: "Jan 2023 – Dec 2023",
    type: "Organization",
    achievements: [
      "Led a team of 8 students in producing a campus energy audit report",
      "Organized 3 technical workshops on solar PV design attended by 150+ students",
      "Secured partnership with 2 industry sponsors for annual energy competition",
    ],
  },
  {
    id: "3",
    role: "Research Assistant",
    organization: "Energy Systems Laboratory, [University Name]",
    period: "Mar 2023 – Nov 2023",
    type: "Research",
    achievements: [
      "Supported thesis research on hybrid microgrid optimization using HOMER Pro",
      "Processed and analyzed 12 months of solar irradiation data for simulation inputs",
      "Co-authored internal technical report on rural electrification feasibility",
    ],
  },
  {
    id: "4",
    role: "Community Service Coordinator",
    organization: "KKN Program, Kelurahan Tunggulwulung",
    period: "Jul 2025 – Aug 2025",
    type: "Community",
    achievements: [
      "Led energy access needs assessment for a rural community of 200+ households",
      "Proposed a solar-powered street lighting program to local government",
      "Delivered energy literacy workshop for community members",
    ],
  },
];