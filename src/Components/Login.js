import { useContext, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const {
    loginMail,
    setLoginMail,
    loginPassword,
    setLoginPassword,
    loginSubmittion,
    loginOrRegister,
    loadingUsers,
  } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  const [loginErrors, setLoginErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const errors = loginSubmittion(
      "login",
      "",
      loginMail,
      loginPassword
    );

    setLoginErrors(errors);

    if (errors.length === 0) {
      loginOrRegister(loginMail);
      navigate("/");
    } else {
      setOpenModal(true);
    }
  }

  if (loadingUsers) {
    return (
      <div className="text-center mt-5">
        <CircularProgress />
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <Container className="form-contanier">
      <Container className="form-header text-center mb-2">
        <LuLogIn />
        <h2>Login</h2>
        <h5>Welcome Back</h5>
      </Container>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={loginMail}
            onChange={(e) => setLoginMail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" id="submit-login-btn">Login</Button>
      </Form>

      <p className="mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/login/register-form">Create Account</Link>
      </p>

      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Body>
          <ul>
            {loginErrors.map((err, i) => (
              <li key={i} style={{ color: "red" }}>
                {err}
              </li>
            ))}
          </ul>
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

export default Login;
