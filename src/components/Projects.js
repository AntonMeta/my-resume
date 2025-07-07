import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import { useDarkMode } from "./isDarkMode";
import colorSharpLight from "../assets/img/color-sharp-2-light.png";
import colorSharpDark from "../assets/img/color-sharp-2-dark.png";
import projectImg from "../assets/img/project-img.png";

export const Projects = () => {
  const { isDarkMode } = useDarkMode();
  const projects = [
    {
      title: "Reactle",
      description:
        "Playable Wordle-inspired game built in React, focusing on efficient game state logic, responsive interaction, and animated feedback. Built using modern React hooks and a clean, modular architecture.",
      imgUrl: projectImg,
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Cross-platform budgeting and expense tracking app built with React Native and PostgreSQL. Supports transaction tracking and detailed expense categorization with real-time data sync. Designed for mobile responsiveness and intuitive financial summaries.",
      imgUrl: projectImg,
    },
    {
      title: "Portfolio Website",
      description:
        " Responsive single-page portfolio site with dynamic theme toggle and accessible design. Backend built with Node.js and Nodemailer to securely process contact form submissions via email. Optimized through lazy loading, semantic markup, and CI/CD deployment.",
      imgUrl: projectImg,
    },
  ];
  return (
    <section
      className={`project ${isDarkMode ? "dark" : "light"}`}
      id="projects"
    >
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I’ve developed a range of projects from web applications to mobile
              tools, focusing on intuitive user experiences, clean architecture,
              and solving real-world problems. Each project reflects my
              attention to detail, performance optimization, and a strong
              understanding of full-stack development.
            </p>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={isDarkMode ? colorSharpDark : colorSharpLight}
        alt="bg-deecoration"
      />
    </section>
  );
};
