import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import { useDarkMode } from "./isDarkMode";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToggleDarkMode = () => {
    if (!isDarkMode) {
      document.body.classList.add("body-dark");
      document.body.classList.remove("body-light");
    } else {
      document.body.classList.add("body-light");
      document.body.classList.remove("body-dark");
    }
    toggleDarkMode();
  };

  return (
    <Navbar
      expand="lg"
      className={
        (scrolled ? "scrolled" : "") +
        " " +
        (isDarkMode ? "dark-nav" : "light-nav")
      }
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => onUpdateActiveLink("home")}>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" key={activeLink}>
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div
              className={isDarkMode ? "social-icon-dark" : "social-icon-light"}
            >
              <a
                href="https://github.com/AntonMeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="GitHub" />
              </a>
              <a href="#connect">
                <img src={navIcon2} alt="email" />
              </a>
            </div>
            <button
              className={isDarkMode ? "sun-btn" : "moon-btn"}
              onClick={handleToggleDarkMode}
            >
              <span>{isDarkMode ? "Sun" : "Moon"} Mode</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
