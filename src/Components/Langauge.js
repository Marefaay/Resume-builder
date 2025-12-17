import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeContext";

function Language() {
  const { language, languageProf, AddLanguage, setLanguage, setLanguageProf } =
    useContext(ThemeContext);
  const proficiency = ["Fluent", "Native", "Intermediate"];
  return (
    <>
      <Form className="w-75">
        <h4>Languages</h4>

        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Control
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.currentTarget.value)}
            placeholder="ex:-Arabic"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Proficiency in the language</Form.Label>
          <br />
          <div className="d-flex justify-content-start gap-3">
            {proficiency.map((prof) => {
              return (
                <>
                  <Form.Label className="d-flex gap-1">
                    <Form.Control
                      type="radio"
                      value={prof}
                      checked={languageProf === prof}
                      onChange={(e) => setLanguageProf(e.currentTarget.value)}
                      // placeholder="ex:-E-commerce"
                    />
                    {prof}
                  </Form.Label>
                  <br />
                </>
              );
            })}
          </div>
        </Form.Group>

        <Button id="add-projects" onClick={() => AddLanguage()}>
          Add Langaugae
        </Button>
      </Form>
    </>
  );
}
export default Language;
