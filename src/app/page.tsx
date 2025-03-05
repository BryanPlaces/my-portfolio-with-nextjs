"use client"
import { Hero, About, Skills, Tools, ProjectList, ExperienceSection, ContactMeSection} from "@/components";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Hero />
      </Container>

      <Container id="about" fluid className="py-4">
        <About />
      </Container>

      <Container id="skills" className="py-5">
        <Skills />
      </Container>

      <Container id="tools" fluid className="py-4">
        <Tools />
      </Container>

      <Container id="projects" fluid className="py-5">
        <ProjectList />
      </Container>

      <Container id="experience" fluid className="py-4">
        <ExperienceSection />
      </Container>

      <Container fluid className="py-5">
        <ContactMeSection />
      </Container>
    </>
  );
}
