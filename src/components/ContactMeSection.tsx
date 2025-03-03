import { Container } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const ContactMeSection = () => (
  <Container className="text-center pt-4">
    <h2>ENCUENTRAME EN</h2>
    <p>No dudes en <span className="highlighted-text">contactar </span>conmigo</p>

    <ul className="px-0 pt-3 d-flex justify-content-center">
      <li className="social-icons">
        <a href="https://github.com/BryanPlaces" target="_blank" rel="noreferrer" className="home-social-icons">
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a href="https://www.linkedin.com/in/bryan-places/" target="_blank" rel="noreferrer" className="home-social-icons">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-icons">
        <a href="mailto:eduardo.places@gmail.com" rel="noreferrer" className="home-social-icons">
          <AiOutlineMail  />
        </a>
      </li>
    </ul>
  </Container>
)

export default ContactMeSection;