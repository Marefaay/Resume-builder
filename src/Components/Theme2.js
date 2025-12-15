import {  Col, Container, ListGroup, Modal, Row } from "react-bootstrap";


import "../Css/Theme2.css";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ShowCVBtn from "./ShowCVBtn";
import Sidebar from "./Sidebar";
function Theme2() {
  return (
    <Container fluid>
      <Row>
     <Sidebar/>
        <Col lg={6}>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Container className="content w-100 h-100 p-4">
              <Outlet />{" "}
            </Container>
          </motion.div>
        </Col>
        <ShowCVBtn url={"/cv-two"} />
      </Row>
    </Container>
  );
}
export default Theme2;
