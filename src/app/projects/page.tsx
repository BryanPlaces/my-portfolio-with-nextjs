import { ProjectList } from "@/components";
import React from "react";
import { Container } from "react-bootstrap";

export default function ProjectPage() {
  return (
    <Container fluid className="project-section px-0">
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I&apos;ve worked on recently.
      </p>
      <ProjectList />
    </Container>
  );
}
