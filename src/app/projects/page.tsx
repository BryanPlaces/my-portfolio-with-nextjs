import { ProjectList } from "@/components";
import React from "react";
import { Container } from "react-bootstrap";

export default function ProjectPage() {
  return (
    <Container fluid className="project-section px-0">
      <span className="text-center">
        <h1 className="project-heading">
          <strong className="highlighted-text">Proyectos</strong>
        </h1>
        <p>
          Proyectos mas destacados en los que he trabajado.
        </p>
      </span>
      <ProjectList showFeatured={false} />
    </Container>
  );
}
