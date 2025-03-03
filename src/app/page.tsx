"use client"
import { Hero, About, Skills, Tools, ProjectList, ExperienceSection, ContactMeSection} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <ProjectList />
      <ExperienceSection />
      <ContactMeSection />
    </>
  );
}
