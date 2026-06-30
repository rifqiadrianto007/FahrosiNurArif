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
    role: "Engineer Intern – Process & Quality Control",
    organization: "PT Madubaru PG–PS Madukismo, Yogyakarta",
    period: "Jul 2025 – Nov 2025",
    type: "Internship",
    achievements: [
      "Achieved 89.73% fermentation efficiency, demonstrating effective process evaluation through mass balance and yield analysis",
      "Contributed to consistent alcohol product quality by minimizing process deviations across fermentation and distillation operations",
      "Delivered reliable production data that supported operational monitoring and quality assurance throughout the production cycle.",
    ],
  },
  {
    id: "2",
    role: "Creative Team & Bujang Ganong Talent",
    organization: "LUMUT Student Activity Unit",
    period: "Sep 2024 – Nov 2025",
    type: "Organization",
    achievements: [
      "Successfully delivered one of LUMUT's largest annual cultural events with 150+ attendees through effective creative planning and execution",
      "Increased audience engagement by developing the Dewi Songgo Langit exhibition concept and integrating live artistic performances",
      "Strengthened cross-functional collaboration among performers, artists, and organizing committees to ensure seamless event execution",
    ],
  },
  {
    id: "3",
    role: "Event Coordinator, Master of Ceremony & Talent",
    organization: "APLIKASI Event – LUMUT Student Activity Unit",
    period: "May 2024 – Jun 2024",
    type: "Organization",
    achievements: [
      "Successfully coordinated an orientation event attended by 100+ participants, ensuring smooth execution from preparation through completion.",
      "Demonstrated leadership by managing three strategic roles simultaneously while maintaining event quality and participant satisfaction",
      "Enhanced participant engagement through effective event facilitation and dynamic public speaking",
    ],
  },
  {
    id: "4",
    role: "Public Relations Volunteer – Public Speaker Division",
    organization: "State Polytechnic of Jember",
    period: "Oct 2022 – Oct 2023",
    type: "Community",
    achievements: [
      "Represented the State Polytechnic of Jember in educational outreach programs, strengthening institutional engagement with prospective students.",
      "Featured on the official POLIJE YouTube channel as an educational presenter, expanding the institution's public outreach initiatives.",
    ],
  },
];