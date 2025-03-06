"use client"
import { Hero, About, Skills, Tools, ProjectList, ExperienceSection, ContactMeSection} from "@/components";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container id="hero" fluid>
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
        <h2 className="text-center pb-4">
          Proyectos más recientes en los que <strong className="highlighted-text">trabajé.</strong>
        </h2>
        
        <ProjectList showFeatured={true} />
        
        <div className="d-flex justify-content-center py-4">
          <Link href="/projects" passHref legacyBehavior>
            <Button size="lg" className="">
              Ver mas proyectos
            </Button>
          </Link>
        </div>
      </Container>

      <Container id="experience" fluid className="py-4">
        <ExperienceSection />
      </Container>

      <Container id="contact" fluid className="py-5">
        <ContactMeSection />
      </Container>
    </>
  );
}
