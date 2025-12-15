import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import LoginImage from "../Images/Login.avif";
import "../Css/Login.css";
import { LuLogIn } from "react-icons/lu";
import { Outlet } from "react-router-dom";

function LoginAndRegister() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default LoginAndRegister;
