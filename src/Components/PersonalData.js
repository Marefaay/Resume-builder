import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function PersonalData() {
  const {
    username,
    setUsername,
    job,
    setJob,
    breif,
    setBreif,
    phone,
    setPhone,
    mail,
    setMail,
    address,
    setAddress,
  } = useContext(ThemeContext);
  return (
    <>
      <Form>
        <h4>Personal Data</h4>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="ex:-Mahmoud Refaay"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            value={job}
            onChange={(e) => setJob(e.currentTarget.value)}
            placeholder="ex:-front end developer"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brief</Form.Label>
          <Form.Control
            type="text"
            value={breif}
            onChange={(e) => setBreif(e.currentTarget.value)}
            placeholder="Enter Your brief"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
            placeholder="ex:-01028712705"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.currentTarget.value)}
            placeholder="ex:-10 St banha qalubia"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={mail}
            onChange={(e) => setMail(e.currentTarget.value)}
            placeholder="ex:-name@example.com"
          />
        </Form.Group>
      </Form>
      <Link id="next" to="/theme2/education">
        Next
      </Link>
    </>
  );
}
export default PersonalData;
