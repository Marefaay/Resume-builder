import { ListGroup } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineFileDone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Css/Sidebar.css";

function Sidebar() {
  const menuItems = [
    { to: "personal-data", icon: <FaRegUser />, label: "Personal Data" },
    { to: "education", icon: <MdCastForEducation />, label: "Education" },
    { to: "languages", icon: <AiOutlineFileDone />, label: "Languages" },
    { to: "skills", icon: <AiOutlineFileDone />, label: "Skills" },
    { to: "work", icon: <GrUserExpert />, label: "Experience" },
    { to: "projects", icon: <GoProject />, label: "Projects" },
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sidebar-wrapper h-100"
    >
      <ListGroup variant="flush" className="sidebar-list">
        {menuItems.map((item, index) => (
          <Link to={item.to} key={index} className="sidebar-link">
            <ListGroup.Item className="sidebar-item d-flex align-items-center justify-content-center justify-content-md-start">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text d-none d-md-block ms-3">
                {item.label}
              </span>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </motion.div>
  );
}

export default Sidebar;