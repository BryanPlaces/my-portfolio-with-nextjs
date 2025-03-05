import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import '@/styles/custom_icons.scss';
import { contactData } from "@/data/contact";
import { Alert, Col, Row } from "react-bootstrap";

const contactIcons: Record<string, JSX.Element> = {
  github: <AiFillGithub />,
  linkedin: <FaLinkedinIn />,
  email: <AiOutlineMail />,
};

const ContactMeSection = () => (
  <>
    <h2 className="text-center pb-4">No dudes en <span className="highlighted-text">contactarme</span></h2>
    
    <Row className="text-center justify-content-center gap-3">
      <Col md={5}>
      <Alert variant="info">
        <AiOutlineMail size={25} style={{ marginBottom: "2px" }} /> eduardo.places@gmail.com
      </Alert>
      </Col>
      <Col md={5}>
        <Alert variant="info">
          <FaPhone size={25} style={{ marginBottom: "2px" }} /> +34 652139862
        </Alert>
      </Col>
      <Col md={5}>
        <Alert variant="info">
          <FaMapMarkerAlt size={25} style={{ marginBottom: "2px" }} /> Santa Lucia de Tirajana, Gran Canaria
        </Alert>
      </Col>
    </Row>

    <div className="px-0 py-3 d-flex justify-content-center gap-4">
      {
        contactData.map((contactItem, index) => (
          <a key={ index } href={ contactItem.url } target={ contactItem.targetValue } rel="noreferrer" className="contact-icon">
          <span>{contactIcons[contactItem.icon]}</span>
        </a>
        ))
      }
    </div>
  </>
)

export default ContactMeSection;