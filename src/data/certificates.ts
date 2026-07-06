// src/data/certificates.ts

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  thumbnail: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Awareness Training Environmental Management System (ISO 14001:2015)",
    issuer: "MAKIN AHLI",
    date: "Jan 2025",
    thumbnail: "/images/Certificates/certif1.webp",
  },
  {
    id: "2",
    title: "Awareness Training Occupational Health and Safety Management System (PP No 50:2012)",
    issuer: "MAKIN AHLI",
    date: "Jan 2025",
    thumbnail: "/images/Certificates/certif2.webp",
  },
  {
    id: "3",
    title: "Awareness Training Occupational Health and Safety Management System (ISO 45001:2018)",
    issuer: "MAKIN AHLI",
    date: "Jan 2025",
    thumbnail: "/images/Certificates/certif3.webp",
  },
  {
    id: "4",
    title: "STIC Essay 2022 Competition",
    issuer: "Polytechnic of Jember",
    date: "Jul 2024",
    thumbnail: "/images/Certificates/certif4.webp",
  },
  {
    id: "5",
    title: "Student Creativity Program: (PKM) Scientific Articles (AI) and Written Ideas (GT)",
    issuer: "Ministry of Education, Culture, Research, and Technology",
    date: "Nov 2024",
    thumbnail: "/images/Certificates/certif5.webp",
  }
];
