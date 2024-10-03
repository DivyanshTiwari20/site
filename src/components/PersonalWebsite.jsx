import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Sun, Moon } from "lucide-react";

const PersonalWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container
      fluid
      className={`py-5 d-flex align-items-center justify-content-center ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ minHeight: "100vh" }}
    >
      {/* Dark mode toggle button with only the icon */}
      <Button
        variant={isDarkMode ? "light" : "dark"}
        onClick={toggleDarkMode}
        className="position-fixed"
        style={{ top: "20px", right: "20px" }}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </Button>

      {/* Main content container with a max-width for centering */}
      <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto" }}>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="mb-4">Divyansh Tiwari</h1>
            <Image
              src="https://pbs.twimg.com/profile_images/1822288957519941632/4Sv0haRV_400x400.jpg"
              roundedCircle
              className="mb-4"
              alt="Profile"
              width={200}
              height={200}
            />
            <div className="mb-4">
              <a href="#" className="me-3">
                <Sun size={24} />
              </a>
              <a href="#" className="me-3">
                <Moon size={24} />
              </a>
            </div>
            <p className="mb-4">
              I'm computer science student in Lucknow. I start learning about
              computer since my 8th grade then thought of becoming an engineer
              so I give JEE entrance exam and failed. Currently, i am completing
              my B.Tech simultaneously making amazing open source projects.
              <p></p><p> 💻
              What I Do: - I like to code in python and C as my primary coding
              language. - I also sometimes tech machines how to do things
              basically, I am Machine learning engineer. - I like to write
              sometimes like i write poem, stories and blog etc. One of my
              favorite Story of all time is Kabuliwala by Rabindranath Tagore. -
              Side by side I know how to use no code tools I am a figma
              designer, youtuber, a film enthusiast and a music lover. -I love
              to walk on the roof of my house with myself.
              </p>
            </p>
            <h2 className="mb-3">About Me</h2>
            <p className="mb-4">
              I am an homesepian who wants to make money!!.
            </p>
            {/* <h2 className="mb-3">My Beliefs</h2>
            <ul className="list-unstyled">
              <li className="mb-2">• Belief point 1</li>
              <li className="mb-2">• Belief point 2</li>
              <li className="mb-2">• Belief point 3</li>
            </ul> */}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PersonalWebsite;
