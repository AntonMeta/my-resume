import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImgDark from "../assets/img/header-img-dark.svg";
import headerImgLight from "../assets/img/header-img-light.svg";
import { useDarkMode } from "./isDarkMode";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "App Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className={isDarkMode ? "banner dark" : "banner light"} id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my resume</span>
            <h1>
              {`Hi I'm Tony `} <br />
              <span className="wrap">-{text}-</span>
            </h1>
            <p className={isDarkMode ? "p-dark" : "p-light"}>
              I am a passionate and motivated developer specializing in
              Flutter-based frontend development, with hands-on experience in
              Full-Stack projects. Passionate about building responsive,
              user-friendly applications and solving real-world problems through
              clean and efficient code. Eager to contribute my cross-platform
              and backend skills to a collaborative team while continuously
              expanding my expertise in software development.
            </p>
            <button onClick={() => console.log("connect")}>
              <a href="#connect">Let's Connect</a>
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={isDarkMode ? headerImgDark : headerImgLight}
              alt="Header Img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
