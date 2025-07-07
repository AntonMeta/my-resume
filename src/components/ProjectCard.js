import { Col } from "react-bootstrap";
import { useDarkMode } from "./isDarkMode";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Col sm={6} md={4}>
      <div className={`project-card ${isDarkMode ? "dark" : "light"}`}>
        <img src={imgUrl} />
        <div className="project-info">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
