import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "./Sidebar"
import {motion} from "framer-motion"
import { Outlet } from "react-router-dom"
import ShowCVBtn from "./ShowCVBtn"
function Theme4(){
    return(
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
          <ShowCVBtn url={"/cv-four"} />
        </Col>
      </Row>
    </Container>
    )
}
export default Theme4