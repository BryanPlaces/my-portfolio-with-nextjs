import { Row, Col, Image, Button } from "react-bootstrap";
import Typewriter from "./Typewriter";
import '@/styles/components/Hero.scss';
import { useNavigation } from "@/hooks/useNavigation";

const Hero = () => {

  const { handleScroll } = useNavigation();
  
  return (
    <>
      <Row className="home-content">
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

          <div className="typewriter-wrapper">
            <Typewriter texts={["FrontEnd Developer", "BackEnd Developer", "Software developer"]} speed={100} delay={1500} />
          </div>

          <div className="hero-buttons">
            <Button className="contact-button" onClick={() => handleScroll('contact')}>Contacto</Button>
            <Button className="download_cv-button" target="_blank" href="/bryan_places_cv.pdf">Descargar CV</Button>
          </div>
        </Col>

        <Col md={5} style={{ paddingBottom: 20 }}>
          <Image src="/about.png" alt="Next.js logo" fluid style={{ objectFit:'contain'}} />
        </Col>
      </Row>
    </>
  )
}

export default Hero;