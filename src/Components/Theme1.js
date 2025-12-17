import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import ShowCVBtn from "./ShowCVBtn";
import "../Css/Theme1.css";

function Theme1() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0"> 
        <Col xs={2} md={3} lg={2} className="sidebar-column">
          <Sidebar />
        </Col>

      
        <Col xs={10} md={9} lg={10} className="content-column">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-3 p-md-5"
          >
            <div className="content-area">
              <Outlet />
            </div>
          </motion.div>
        </Col>

        <ShowCVBtn url={"/cv-one"} />
      </Row>
    </Container>
  );
}

export default Theme1;