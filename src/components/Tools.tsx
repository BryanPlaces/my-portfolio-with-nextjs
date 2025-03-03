import { Col, Container, Row } from "react-bootstrap";
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoGitlab } from "react-icons/io5";
import { SiGithub, SiJira, SiMacos, SiPostman, SiSlack } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Tools = () => {
  return (
    <Container fluid className="py-4">
      <h2 className="text-center pb-4">
        <strong className="highlighted-text">Herramientas</strong> que utilizo
      </h2>
      <Row className="justify-content-center gap-4">
        <Col xs={4} md={2} className="tech-icons"> <IoLogoBitbucket /> </Col>
        <Col xs={4} md={2} className="tech-icons"> <IoLogoGitlab /> </Col>
        <Col xs={4} md={2} className="tech-icons"> <SiGithub /> </Col>
        <Col xs={4} md={2} className="tech-icons"> <SiJira /> </Col>
        <Col xs={4} md={2} className="tech-icons"> <SiMacos /> </Col>
        <Col xs={4} md={2} className="tech-icons"> <TbBrandVscode /></Col>
        <Col xs={4} md={2} className="tech-icons"> <SiPostman /> </Col>
        <Col xs={4} md={2} className="tech-icons"> <SiSlack /> </Col>
      </Row>
    </Container>
  );
}

export default Tools;