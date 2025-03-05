import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { contactData } from "@/data/contact";
import '@/styles/components/Footer.scss'

const contactIcons: Record<string, JSX.Element> = {
  github: <AiFillGithub />,
  linkedin: <FaLinkedinIn />,
  email: <AiOutlineMail />,
};

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Bryan Places</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <div className="d-flex justify-content-center gap-4">
            {
              contactData.map((contactItem, index) => (
                <a key={ index } href={ contactItem.url } target={ contactItem.targetValue } rel="noreferrer" className="footer-icon">
                <span>{contactIcons[contactItem.icon]}</span>
              </a>
              ))
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;