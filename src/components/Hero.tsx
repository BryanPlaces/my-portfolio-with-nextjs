import { Col, Container, Row, Image } from "react-bootstrap";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <Container fluid className="home-content">
      <Row>
        <Col md={7} className="d-flex flex-column justify-content-center">
          <h1 className="px-5 pb-1">
            ¡Hola!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="px-5">
            Soy<strong className="highlighted-text"> Bryan Places</strong>
          </h1>

          <div style={{ margin: 50, textAlign: "left", minHeight: '60px' }}>
            <Typewriter texts={["FrontEnd Developer", "BackEnd Developer", "Software developer"]} speed={100} delay={1500} />
          </div>
        </Col>

        <Col md={5} style={{ paddingBottom: 20 }}>
          <Image src="/about.png" alt="Next.js logo" fluid style={{ objectFit:'contain'}} />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;