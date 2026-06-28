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
    title: "Solar PV System Design",
    issuer: "Placeholder Institution",
    date: "Jan 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "2",
    title: "Energy Audit Fundamentals",
    issuer: "Placeholder Institution",
    date: "Mar 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "3",
    title: "HOMER Pro Energy Modeling",
    issuer: "Placeholder Institution",
    date: "May 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "4",
    title: "Python for Data Analysis",
    issuer: "Placeholder Institution",
    date: "Jul 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "5",
    title: "AutoCAD Essentials",
    issuer: "Placeholder Institution",
    date: "Aug 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "6",
    title: "Renewable Energy Fundamentals",
    issuer: "Placeholder Institution",
    date: "Oct 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "7",
    title: "GIS for Energy Planning",
    issuer: "Placeholder Institution",
    date: "Nov 2024",
    credentialUrl: "#",
    thumbnail: "/images/certificate.webp",
  },
  {
    id: "8",
    title: "Power BI Data Visualization",
    issuer: "Placeholder Institution",
    date: "Dec 2024",
    credentialUrl: "#",
    thumbnail: "public/images/certificate.webp",
  },
];