import { Col, Row } from "react-bootstrap";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import '@/styles/components/ProjectList.scss';

interface ProjectListProps {
  showFeatured?: boolean;
}

const ProjectList = ({showFeatured} : ProjectListProps ) => (
  <>
    <Row>
      {
        projects
        .filter((project) => showFeatured ? project.featured : true)
        .map((project, index) => (
          <Col key={index} lg={6} md={12} className="py-3">
            <ProjectCard {...project} />
          </Col>
        ))
      }
    </Row>
  </>
);

export default ProjectList;