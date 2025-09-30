import Image from "next/image";
import { ResponsiveNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">My Skills</h2>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <h2 className="text-3xl font-bold">My Projects</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Contact Me</h2>
        </section>
      </main>
    </>
  );
}
