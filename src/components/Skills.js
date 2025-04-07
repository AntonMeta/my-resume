import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import skill1 from "../assets/img/skill1.svg";
import skill2 from "../assets/img/skill2.svg";
import skill3 from "../assets/img/skill3.svg";
import skill4 from "../assets/img/skill4.svg";
import skill5 from "../assets/img/skill5.svg";
import skill6 from "../assets/img/skill6.svg";
import skill7 from "../assets/img/skill7.svg";
import skill8 from "../assets/img/skill8.svg";
import skill9 from "../assets/img/skill9.svg";
import skill10 from "../assets/img/skill10.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container className="container">
        <Row>
          <Col className="skill-col">
            <div className={"skill-box"}>
              <h2>Technical Skills</h2>
              <p>
                I have a strong technical skill set covering both front-end and
                back-end development, with expertise in languages like Python,
                Go, C++, and JavaScript. Additionally, I am proficient in
                frameworks such as React and Flutter, database management with
                MySQL, and DevOps practices including CI/CD, Git, and CLI tools.
              </p>
              <Carousel
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={2000}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="Flutter" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Go" />
                  <h5>Go</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="C++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill7} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={skill8} alt="CI/CD" />
                  <h5>CI/CD</h5>
                </div>
                <div className="item">
                  <img src={skill9} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={skill10} alt="CLI" />
                  <h5>CLI Proficiency</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
