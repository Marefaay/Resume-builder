import Template1 from "../Images/template1.png";
import Template2 from "../Images/template2.jpg";
import Template3 from "../Images/tempate3.jpg";
import Template4 from "../Images/template4.jpg";
import "../Css/SelectTemplate.css";
import { Link } from "react-router-dom";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";

function SelectTemplate() {
  // array of templattes
  const templates = [
    { id: 1, img: Template1, link: "/theme1" },
    { id: 2, img: Template2, link: "/theme2" },
    { id: 3, img: Template3, link: "/theme3" },
    { id: 4, img: Template4, link: "/theme4" },
  ];

  return (
    <div className="select-template my-5">
      <Container>
        {/* HEADER */}
        <motion.h1
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Select a <span id="template">Template</span> From The List
        </motion.h1>

        {/* TEMPLATES GRID */}
        <Row className="g-4 justify-content-center">
          {templates.map((template, index) => (
            <Col lg={3} md={6} sm={12} key={template.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.2 * index, duration: 0.5, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <Card className="template-card glass-card position-relative text-center shadow-sm">
                  <Image
                    src={template.img}
                    alt={`Template ${template.id}`}
                    fluid
                    className="template-img"
                  />
                  <Link
                    to={template.link}
                    className="edit-template position-absolute"
                  >
                    Edit Template
                  </Link>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SelectTemplate;
