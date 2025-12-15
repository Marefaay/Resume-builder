import HomeImage from "../Images/home.png";
import "../Css/Home.css";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home" dir="ltr">
      <Container>
        <Row className="align-items-center">
          {/* Column1 start */}

          <Col lg={6} md={12}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text"
            >
              <h1>
                Your resume in three <span id="easy">easy</span> steps
              </h1>

              <p >
                Resume builder tools that assemble well-formatted resume.
                Through a resume builder, you can create a professional-looking
                resume in a few easy steps.
              </p>

              <div className="numbers-list mt-5">
                {[
                  "Select a template from our collection.",
                  "Build your resume using our easy builder.",
                  "Download your resume.",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start gap-3 mb-3"
                  >
                    <Button variant="primary" className="num-btn">
                      {index + 1}
                    </Button>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Column1 end */}
          {/* Column 2 start */}
          <Col lg={6} md={12}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="image d-flex flex-column align-items-center"
            >
              <Image src={HomeImage} alt="Home" fluid className="mb-4" />

              <Button variant="success" className="select-btn px-4 py-2">
                <Link to="/select-template">Select a template</Link>
              </Button>
            </motion.div>
          </Col>
          {/* Column 2 End */}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
