import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import colorSharpLight from "../assets/img/color-sharp-light.png";
import colorSharpDark from "../assets/img/color-sharp-dark.png";
import { useDarkMode } from "./isDarkMode";
import contactImg from "../assets/img/contact-img.svg";

export const Mail = () => {
  const { isDarkMode } = useDarkMode();
  const userInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [userDetails, setUserDetails] = useState(userInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setUserDetails({
      ...userDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5050/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(userDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setUserDetails(userInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({ succes: false, message: "Message not sent" });
    }
  };

  return (
    <section className={`mail ${isDarkMode ? "dark" : "light"}`} id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            {/* <img alt="Contact Me" /> */}
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={userDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={userDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={userDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={userDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={userDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  {status.message && (
                    <div>
                      <p
                        className={
                          status.succes === false ? "danger" : "succes"
                        }
                      >
                        {status.message}
                      </p>
                    </div>
                  )}
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
