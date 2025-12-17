import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeContext";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Projects() {
  const {
    projectLink,
    setProjectLink,
    project,
    setProject,
    projectDesc,
    projects,
    setProjects,
    projectDate,
    setProjectDate,
    setProjectDesc,
    Addproject,
    handleSubmitClick,
    FormSubmittion,
    cvRef,
  } = useContext(ThemeContext);

  return (
    <>
      <Form className="w-75">
        <h4>Projects</h4>

        <Form.Group className="mb-3">
          <Form.Label>Project title</Form.Label>
          <Form.Control
            type="text"
            value={project}
            onChange={(e) => setProject(e.currentTarget.value)}
            placeholder="ex:-E-commerce"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Project link</Form.Label>
          <Form.Control
            type="text"
            value={projectLink}
            onChange={(e) => setProjectLink(e.currentTarget.value)}
            placeholder="https://google.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Project date</Form.Label>
          <Form.Control
            type="date"
            value={projectDate}
            onChange={(e) => setProjectDate(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.currentTarget.value)}
            placeholder="Descripbe Your Project"
          />
        </Form.Group>

        <Button id="add-projects" onClick={() => Addproject()}>
          Add Project
        </Button>
      </Form>
     
    </>
  );
}
export default Projects;
