import { useContext } from "react";
import { Form } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeContext";

function Education() {
  const {
    education,
    setEducation,
    educationDesc,
    setEducationDesc,
    gradutionDate,
    setGradutionDate,
  } = useContext(ThemeContext);
  return (
    <Form>
      <h4>Education</h4>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={education}
          onChange={(e) => setEducation(e.currentTarget.value)}
          placeholder="ex:-Computer science"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Graduation date</Form.Label>
        <Form.Control
          type="date"
          value={gradutionDate}
          onChange={(e) => setGradutionDate(e.currentTarget.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={educationDesc}
          onChange={(e) => setEducationDesc(e.currentTarget.value)}
          placeholder="ex:-AI, Machine Learning"
        />
      </Form.Group>
    </Form>
  );
}
export default Education;
