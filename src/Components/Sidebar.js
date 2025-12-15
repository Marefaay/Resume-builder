import { Col, Container, ListGroup } from "react-bootstrap"
import { AiOutlineFileDone } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { GoProject } from "react-icons/go"
import { GrUserExpert } from "react-icons/gr"
import { MdCastForEducation } from "react-icons/md"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import "../Css/Sidebar.css"
function Sidebar(){
    return(
        <Container>
             <Col lg={3} className="sidebar-container ">
        <motion.div 
        initial={{x:-50,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.8}}
        >
          <Container className="w-100 h-100 side-bar">
            <ListGroup
             className="sidebar-list">
              <Link
               to="personal-data">
                <ListGroup.Item className="sidebar-item">
                  <FaRegUser className="sidebar-icon" />
                  Personal Data
                </ListGroup.Item>
              </Link>

              <Link to="education">
                <ListGroup.Item className="sidebar-item">
                  <MdCastForEducation className="sidebar-icon" />
                  Education
                </ListGroup.Item>
              </Link>

              <Link to="languages">
                <ListGroup.Item className="sidebar-item">
                  <AiOutlineFileDone className="sidebar-icon" />
                 languages
                </ListGroup.Item>
              </Link>
              <Link to="skills">
                <ListGroup.Item className="sidebar-item">
                  <AiOutlineFileDone className="sidebar-icon" />
                  Technical Skills
                </ListGroup.Item>
              </Link>
              <Link to="work">
                <ListGroup.Item className="sidebar-item">
                  <GrUserExpert className="sidebar-icon" />
                  Work and Experiences
                </ListGroup.Item>
              </Link>
              <Link to="projects">
                <ListGroup.Item className="sidebar-item">
                  <GoProject className="sidebar-icon" />
                  Projects
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </Container>
          </motion.div>
        </Col>
      
        </Container>
    )
}
export default Sidebar