import { Form } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

function TechnicalSkills() {
  const { ulSkill, skill, setSkill } = useContext(ThemeContext);
  return (
    <Form>
      <h4>Technical Skills</h4>
      <Form.Group className="mb-3">
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.currentTarget.value)}
          placeholder="ex:-HTML,CSS,JS"
        />
      </Form.Group>
    </Form>
  );
}
export default TechnicalSkills;
