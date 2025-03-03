"use client"
import { Card, Col, Row } from "react-bootstrap";
import { Project } from "@/types/Project";
import { LaravelIcon, ReactjsIcon, TypescriptIcon, VuejsIcon } from "./icons";

const technologyIcons: Record<string, JSX.Element> = {
  laravel: <LaravelIcon />,
  vue: <VuejsIcon />,
  typescript: <TypescriptIcon />,
  react: <ReactjsIcon />
};

const ProjectCard:React.FC<Project> = ({imgPath, title, description, technologies} : Project) => {

  return (
    <Card className="project-card-view">
      <Row className="h-100 g-0">
        <Col md={4} className="p-2">
          <Card.Img variant="top" src={imgPath} alt="card-img" className="rounded" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            
            <div className="icons-container">
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