"use client"
import {Image, Button, Container, Navbar, Nav} from "react-bootstrap";
import { CgGitFork, CgWorkAlt } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
//import Link from "next/link";
import '@/styles/components/Navbar.scss';
import { useNavigation } from "@/hooks/useNavigation";

const NavBar = () => {

  const { expand, updateExpanded, navColour, handleScroll } = useNavigation();

  return (
    <Navbar expanded={expand} fixed="top" expand="lg" className={navColour ? "sticky" : "navbar"}>
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
              <Nav.Link onClick={() => handleScroll("hero")}>
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
                <CgWorkAlt style={{ marginBottom: "2px" }} /> Experiencia
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