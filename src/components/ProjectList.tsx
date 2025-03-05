import { Button, Col, Row } from "react-bootstrap";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import '@/styles/components/ProjectList.scss';

const ProjectList = () => (
  <>
    <h2 className="text-center pb-4">
      Proyectos más recientes en los que <strong className="highlighted-text">trabajé.</strong>
    </h2>

    <Row>
      {
        projects.map((project, index) => (
          <Col key={index} lg={6} md={12} className="py-3">
            <ProjectCard {...project} />
          </Col>
        ))
      }
    </Row>

    <Button className="">
      Ver mas proyectos
    </Button>
  </>
);

export default ProjectList;