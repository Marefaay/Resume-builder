import Devrrloper from "../Images/developer.jpg";
import "../Css/About.css";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about mt-5">
      <Container>
        {/* start header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-head mb-5 text-center"
        >
          <h5 className="text-uppercase">People love us</h5>
          <h1>Resume Builder</h1>
          <p >Build the Resume That Gets You Hired!</p>
        </motion.div>
        {/* end header */}

        {/*  start PROFILE CARD */}
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="profile-card p-4 shadow-lg glass-card">
                <Row className="align-items-center">
                  {/*  start image*/}
                  <Col md={5} className="text-center mb-3 mb-md-0">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 150 }}
                    >
                      <Image
                        src={Devrrloper}
                        alt="developer photo"
                        fluid
                        rounded
                        className="profile-img"
                      />
                    </motion.div>
                  </Col>
                  {/*  end image*/}

                  {/* start text*/}
                  <Col md={7}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-black-50"
                    >
                      A resume builder website is a web-based tool that allows
                      users to create and customize a professional resume to
                      their desired specifications. These websites provide
                      modern templates to make the process easy and fast.
                    </motion.p>

                    <motion.h4
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Mahmoud Refaay:
                      <span id="job-title">Front End Developer</span>
                    </motion.h4>
                  </Col>
                  {/* end text*/}
                </Row>
              </Card>
            </motion.div>
          </Col>
        </Row>
        {/*  end PROFILE CARD */}
      </Container>
    </div>
  );
}

export default About;
