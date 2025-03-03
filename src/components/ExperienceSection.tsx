import { Card, Col, Container, Row } from "react-bootstrap";

const ExperienceSection = () => {

  return (
    <Container fluid className="py-4">
      <h2 className="text-center pb-4">
        <strong className="highlighted-text">Experiencia</strong> profesional
      </h2>
      <Row>
        <Col md={12}>
          <Card className="project-card-view">
            <Row>
              <Col md={4} className="p-2">
                <Card.Img variant="top" src={'2coders_logo.jpg'} width={50} alt="card-img" className="rounded" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>2Coders Studio S.L</Card.Title>
                  <Card.Text>FullStack Developer</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="project-card-view">
            <Row>
              <Col md={4} className="p-2">
                <Card.Img variant="top" src={'atlantic_systems_logo.jpg'} width={50} alt="card-img" className="rounded" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>AtlanTIC Systems</Card.Title>
                  <Card.Text>FullStack Developer</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default ExperienceSection;