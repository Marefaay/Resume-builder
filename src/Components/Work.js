import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeContext";

function Work() {
  const {
    experince,
    setExperince,
    experinceDesc,
    setExperinceDesc,
    experinceDate,
    setExperinceDate,
    AddExperince,
  } = useContext(ThemeContext);
  return (
    <Form className="w-75">
       <h4>Work and Experinces</h4>
      <Form.Group className="mb-3">
        <Form.Label>Job title</Form.Label>
        <Form.Control
          type="text"
          value={experince}
          onChange={(e) => setExperince(e.currentTarget.value)}
          placeholder="ex:-web developer"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Job Date</Form.Label>
        <Form.Control
          type="date"
          value={experinceDate}
          onChange={(e) => setExperinceDate(e.currentTarget.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          as="textarea"
          value={experinceDesc}
          onChange={(e) => setExperinceDesc(e.currentTarget.value)}
          placeholder="ex:-Discovery Academy"
        />
      </Form.Group>

      <Button
        id="add-experince"
        onClick={() => AddExperince()}
        className="mb-3"
      >
        Add Experience
      </Button>
    </Form>
  );
}
export default Work;
