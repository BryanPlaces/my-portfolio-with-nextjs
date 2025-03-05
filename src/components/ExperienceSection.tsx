import { Card, Col, Row } from "react-bootstrap";
import '@/styles/components/Experience.scss';

const ExperienceSection = () => (
  <>
    <h2 className="text-center pb-4">
      <strong className="highlighted-text">Experiencia</strong> profesional
    </h2>

    <div className="d-flex flex-column gap-3">
      <Card className="experience-card">
        <Row className="g-0">
          <Col md={2} className="p-2">
            <Card.Img variant="top" src={'2coders_logo.jpg'} width={50} alt="card-img" />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title>2Coders Studio S.L</Card.Title>
              <div className="d-flex flex-column gap-2">
                <span>FullStack Developer</span>
                <em>09/2021 - 12/2024</em>
                <p>
                  Desarrollo y mantenimiento de interfaces web y aplicaciones OTT con React.js, Typescript
                  y frameworks como BBC/TAL, implementando herramientas como Storybook, Webpack y Diva Video Player,
                  y realizando testing con React Testing Library.
                </p>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="experience-card">
        <Row className="g-0">
          <Col md={2} className="p-2">
            <Card.Img variant="top" src={'atlantic_systems_logo.jpg'} width={50} alt="card-img" />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title>AtlanTIC Systems</Card.Title>
              <div className="d-flex flex-column gap-2">
                <span>FullStack Developer</span>
                <em>06/2019 - 09/2021</em>
                <p>
                  Desarrollo de aplicaciones web con Laravel y Vue.js, creación de interfaces modernas usando
                  HTML5, CSS, SASS y librerías como ElementUI, junto con la creación de APIs RESTful, testing con
                  Cypress y control de versiones con Git.
                </p>
              </div>
              
            </Card.Body>
          </Col>
        </Row>
      </Card>

    </div>
  </>
);

export default ExperienceSection;