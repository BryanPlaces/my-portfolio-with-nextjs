'use client'
import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

function AnimatedNumberFramerMotion({ value }) {

  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Container className="pt-5">
        <Row style={{ paddingTop:'6rem' }}>
          <Col md={6}>
            <h2 className="mb-4">BIOGRAFÍA</h2>
            <p>
              Soy <b className="purple">Bryan Eduardo Places Aldaz</b>, un desarrollador de software con más de{" "}
              <b className="purple">5 años de experiencia</b> en desarrollo web, tanto en frontend como en backend. 
              Mi especialidad radica en tecnologías como <b className="purple">JavaScript, React.js, Vue.js, TypeScript, PHP y Laravel</b>.
            </p>

            <p className="my-4">
              A lo largo de mi carrera, he trabajado en diversos proyectos de <b className="purple">páginas web, CRMs, 
              gestión empresarial y facturación</b>, así como en <b className="purple">plataformas de streaming</b> con soporte para 
              <b className="purple"> Samsung, LG, Hisense, PS4 y PS5</b>.
            </p>

            <p className="my-4">
              En <b className="purple">2Coders Studio</b>, me especialicé en el desarrollo de <b className="purple">aplicaciones OTT </b> 
              con React.js y TypeScript, la implementación de Storybook para componentes UI y la integración de 
              reproductores de video como Diva Video Player con HLS y Video.js. Además, trabajé en el backend con Laravel, 
              creando y consumiendo <b className="purple">API RESTful</b>. En el ámbito de testing, utilicé 
              <b className="purple"> Jest y React Testing Library</b> para garantizar la calidad y estabilidad del frontend.
            </p>

            <p className="my-4">
              Anteriormente, en <b className="purple">AtlanTIC Systems</b>, participé en proyectos con Laravel y Vue.js, 
              enfocándome en el desarrollo de interfaces y API RESTful. Además, implementé pruebas automatizadas con 
              <b className="purple"> Cypress</b> y pruebas unitarias para asegurar la robustez del software.
            </p>


          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <Image src="/about.png" alt="Next.js logo" fluid style={{ objectFit:'contain'}} />
          </Col>
        </Row>


        <Row className="pt-5 text-center">
          <Col md={4}>
            <div className="mb-4">
              <span className="display-4 font-bold">
                <AnimatedNumberFramerMotion value={1461} />+
              </span>
              <h3>Days of Coding</h3>
            </div>
          </Col>

          <Col md={4}>
            <div className="mb-4">
              <span className="display-4 font-bold">
                <AnimatedNumberFramerMotion value={500} />
              </span>
              <h3>Bugs Made</h3>
            </div>
          </Col>

          <Col md={4}>
            <div className="mb-4">
              <span className="display-4 font-bold">
                <AnimatedNumberFramerMotion value={499} />
              </span>
              <h3>Bugs Crushed</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
