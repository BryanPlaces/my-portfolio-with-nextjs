import { Button, Col, Row } from "react-bootstrap";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import '@/styles/components/ProjectList.scss';
import Link from "next/link";

const ProjectList = () => (
  <>
    <Row>
      {
        projects.map((project, index) => (
          <Col key={index} lg={6} md={12} className="py-3">
            <ProjectCard {...project} />
          </Col>
        ))
      }
    </Row>

    <div className="d-flex justify-content-center py-4">
    <Link href="/projects" passHref legacyBehavior>
      <Button size="lg" className="">
        Ver mas proyectos
      </Button>
    </Link>
    </div>
  </>
);

export default ProjectList;