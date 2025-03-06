"use client"
import { Card, Col, Row } from "react-bootstrap";
import { Project } from "@/types/Project";
import { BootstrapIcon, JavascriptIcon, JqueryIcon, LaravelIcon, ReactjsIcon, TailwindIcon, TypescriptIcon, VuejsIcon, VuetifyIcon } from "./icons";

const technologyIcons: Record<string, JSX.Element> = {
  laravel: <LaravelIcon />,
  vue: <VuejsIcon />,
  typescript: <TypescriptIcon />,
  react: <ReactjsIcon />,
  javascript: <JavascriptIcon />,
  jquery: <JqueryIcon />,
  bootstrap: <BootstrapIcon />,
  tailwind: <TailwindIcon />,
  vuetify: <VuetifyIcon />,
};

const ProjectCard:React.FC<Project> = ({imgPath, title, description, technologies} : Project) => {

  return (
    <Card className="project-card-view">
      <Row className="h-100 g-0">
        <Col md={4} className="p-2">
          <Card.Img variant="top" src={imgPath} alt="card-img" className="rounded" />
        </Col>
        <Col md={8}>
          <Card.Body className="h-100 d-flex flex-column">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            
            <div className="d-flex gap-2 mt-auto">
              {technologies.map((tech) => (
                <span key={tech}>{technologyIcons[tech]}</span>
              ))}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProjectCard;