"use client"
import React, { useEffect, useState } from "react";
import {Image, Button, Container, Navbar, Nav} from "react-bootstrap";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
//import Link from "next/link";
import '@/styles/components/Navbar.scss';

const NavBar = () => {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [navColour, updateNavbar] = useState<boolean>(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
    
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 50; // Ajusta este valor según la altura de tu navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      updateExpanded(false); // Cerrar el navbar en móvil después de hacer clic
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Image src={'logo.png'} alt="logo-img" width={50} roundedCircle className="img-fluid"/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => handleScroll("home")}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleScroll("about")}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre Mi
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleScroll("projects")}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Proyectos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleScroll("experience")}>
                Experiencia
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => handleScroll("contact")}>
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/BryanPlaces/my-portfolio-with-nextjs"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;