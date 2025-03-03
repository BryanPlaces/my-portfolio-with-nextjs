import { Button, Col, Container, Row } from "react-bootstrap";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectList = () => {

  return (
    <Container fluid className="py-5">
      <h2 className="text-center pb-4">
        Proyectos más recientes en los que <strong className="highlighted-text">trabajé.</strong>
      </h2>

      <Row>
        {
          projects.map((project, index) => (
            <Col key={index} lg={6} md={12} className="py-4">
              <ProjectCard {...project} />
            </Col>
          ))
        }
      </Row>

      <Button className="fork-btn-inner">
        Ver mas proyectos
      </Button>
    </Container>
  );
}

export default ProjectList;