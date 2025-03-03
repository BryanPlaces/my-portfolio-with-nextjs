import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="py-4">
      <h2 className="mb-4 text-center">SOBRE MI</h2>
      <p>
        Soy un programador con más de{" "}
        <b className="highlighted-text">5 años de experiencia</b> en desarrollo web, tanto en frontend como en backend. 
        Mi especialidad radica en tecnologías como <b className="highlighted-text">JavaScript, React.js, Vue.js, TypeScript, PHP y Laravel</b>.
      </p>

      <p className="my-4">
        A lo largo de mi carrera, he trabajado en diversos proyectos de <b className="highlighted-text">páginas web, CRMs, 
        gestión empresarial y facturación</b>, así como en <b className="highlighted-text">plataformas de streaming</b> con soporte para 
        <b className="highlighted-text"> Samsung, LG, Hisense, PS4 y PS5</b>.
      </p>

      <p className="my-4">
        En <b className="highlighted-text">2Coders Studio</b>, me especialicé en el desarrollo de <b className="highlighted-text">aplicaciones OTT </b> 
        con React.js y TypeScript, la implementación de Storybook para componentes UI y la integración de 
        reproductores de video como Diva Video Player con HLS y Video.js. Además, trabajé en el backend con Laravel, 
        creando y consumiendo <b className="highlighted-text">API RESTful</b>. En el ámbito de testing, utilicé 
        <b className="highlighted-text"> Jest y React Testing Library</b> para garantizar la calidad y estabilidad del frontend.
      </p>

      <p className="mt-4 mb-0">
        Anteriormente, en <b className="highlighted-text">AtlanTIC Systems</b>, participé en proyectos con Laravel y Vue.js, 
        enfocándome en el desarrollo de interfaces y API RESTful. Además, implementé pruebas automatizadas con 
        <b className="highlighted-text"> Cypress</b> y pruebas unitarias para asegurar la robustez del software.
      </p>
    </Container>
  );
}

export default About;