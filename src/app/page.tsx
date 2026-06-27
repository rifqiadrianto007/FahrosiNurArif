import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/ui/Navbar";

interface PlaceholderSectionProps {
  id: string;
}

const placeholderSections: PlaceholderSectionProps[] = [
  { id: "about" },
  { id: "skills" },
  { id: "projects" },
  { id: "experience" },
  { id: "contact" },
];

function PlaceholderSection({ id }: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className="section-padding flex min-h-screen items-center justify-center bg-[#0A0F1E]"
    >
      <p className="text-center text-lg font-medium text-[#EFF0F4]/60">
        Coming soon
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {placeholderSections.map((section) => (
          <PlaceholderSection key={section.id} id={section.id} />
        ))}
      </main>
    </>
  );
}
