import { Col, Container, Row } from "react-bootstrap";
import { DiJavascript1, DiLaravel, DiReact } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { RiBootstrapLine, RiVuejsFill } from "react-icons/ri";
import { SiCss3, SiHtml5, SiJquery, SiMysql, SiPhp } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

const Skills = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center pb-4">
        <strong className="highlighted-text">Habilidades</strong> profesionales
      </h2>
      <Row className="justify-content-center gap-4">
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
          <span className="tech-icons-text pt-1">HTML</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
          <span className="tech-icons-text">CSS</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <RiBootstrapLine />
          <span className="tech-icons-text">Bootstrap</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <span className="tech-icons-text">Javascript</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandTypescript />
          <span className="tech-icons-text">Typescript</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <span className="tech-icons-text">React</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandNextjs />
          <span className="tech-icons-text">Next.js</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <RiVuejsFill />
          <span className="tech-icons-text">Vue.js</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiLaravel />
          <span className="tech-icons-text">Laravel</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJquery />
          <span className="tech-icons-text">JQuery</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaDocker />
          <span className="tech-icons-text">Docker</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;