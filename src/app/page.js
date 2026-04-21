import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero.jsx";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <ExperienceSection />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}