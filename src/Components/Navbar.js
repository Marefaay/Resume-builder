// import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { FaSun } from "react-icons/fa6";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import { useContext } from "react";
import { ModeContext } from "../Context/DarkAndLightModeContext";
import { FaMoon } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const { Logout } = useContext(AuthContext);
  // getStoredUser();
  const { ToggleMode, darkMode } = useContext(ModeContext);
  const { userfromLocalStorage } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  position-sticky top-0 z-3">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/select-template">
                  Select Template
                </Link>
              </li>
            </ul>
            <Link
           
              id="login-btn"
              to={localStorage.getItem("user") ? "#" : "/login"}
            >
              {localStorage.getItem("user")
                ? userfromLocalStorage.slice(0, 2).toUpperCase()
                : "login"}
            </Link>
            {localStorage.getItem("user")&&<Link id="logout-btn" onClick={Logout}><FiLogOut />
</Link>}
          </div>
          <button
            onClick={() => ToggleMode()}
            className="ms-4 border-0 theme-icon"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
