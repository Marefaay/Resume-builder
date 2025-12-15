import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";

function Register() {
  const {
    loginMail,
    setLoginMail,
    loginUserName,
    setLoginUserName,
    loginSubmittion,
    loginPassword,
    setLoginPassword,
    loginOrRegister,
  } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [loginErrors, setLoginErrors] = useState([]);
  const apiUrl = "http://localhost:3000/users";
  // useEffect(() => {
  //   fetch(apiUrl, { method: "POST", body: JSON.stringify(userObject) });
  // }, []);
  const userObject = {};
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    const loginValidationErrors = loginSubmittion(
      "register",
      loginUserName,
      loginMail,loginPassword
    );
    setLoginErrors(loginValidationErrors);
    // const oneError = loginErrors.map((loginError) => {
    //   return loginError;
    // });
    if (loginValidationErrors.length === 0) {
      setOpenModal(false);
      console.log("No Errors");

      userObject.userName = loginUserName;
      userObject.mail = loginMail;
      userObject.password = loginPassword;
      fetch(apiUrl, { method: "POST", body: JSON.stringify(userObject) });
      loginOrRegister(loginUserName);

      navigate("/");
      // userObject.save()
      console.log(userObject);
    } else {
      e.preventDefault();
      console.log("Error", loginValidationErrors);
      setOpenModal(true);
    }
  }
  return (
    <Container className="form-contanier">
      <Container className="form-header text-center mb-2">
        <RiLoginBoxFill />

        <h2>Register</h2>
        <h5>Create Your account fo free</h5>
      </Container>

      <Form className="w-100 m-auto p-1" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>

          <div style={{ position: "relative" }}>
            <FaUserAlt
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#999",
              }}
            />
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              style={{ paddingLeft: "35px" }}
              value={loginUserName}
              onChange={(e) => setLoginUserName(e.currentTarget.value)}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div style={{ position: "relative" }}>
            <IoIosMail
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#999",
              }}
            />
            <Form.Control
              type="email"
              placeholder="Enter Your E-mail"
              style={{ paddingLeft: "35px" }}
              value={loginMail}
              onChange={(e) => {
                setLoginMail(e.currentTarget.value);
              }}
            />
          </div>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <div style={{ position: "relative" }}>
            <FaLock
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#999",
              }}
            />
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              style={{ paddingLeft: "35px" }}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.currentTarget.value)}
            />
          </div>
          <Form.Text className="text-muted">
            We'll never share your Password with anyone else.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          id="submit-login-btn"
          // onClick={handleSubmit}
        >
          Register
        </Button>
      </Form>
      <p className="mt-3 text-center">
        Don you have an account? <Link to="/login/login-form">Sign in now</Link>
      </p>
      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Body>
          {loginErrors.length === 0 ? (
            <div className="text-center">
              <h3>Your Account is being created</h3>
              <CircularProgress />
            </div>
          ) : (
            <ul>
              {loginErrors.map((err, idx) => (
                <li key={idx} style={{ color: "red" }}>
                  {err}
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        {loginErrors.length !== 0 && (
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpenModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
}
export default Register;
