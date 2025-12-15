import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Col, Container, Row } from "react-bootstrap";
import "../Css/CVThree.css";
import Language from "./Langauge";
function CVThree() {
  const {
    address,
    singleLanguage,language,
    languages,
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
    skill,
    setSkill,
    education,
    setEducation,
    educationDesc,
    setEducationDesc,
    project,
    setProject,
    projectDesc,
    projects,
    setProjects,
    projectDate,
    setProjectDate,
    setProjectDesc,
    experince,
    setExperince,
    experinceDesc,
    setExperinceDesc,
    FormSubmittion,
    gradutionDate,
    setGradutionDate,
    Addproject,
    ulSkill,
    eduDesc,
    singleProject,
    projectLink,
    setProjectLink,
    experinceDate,
    setExperinceDate,
    AddExperince,
    singleExperinces,
    handleSubmitClick,
    cvRef,
  } = useContext(ThemeContext);
  return (
    <>
      <Container className="cv3 pt-5 pb-5 ">
        {username ? <h1>{username}</h1> : <h1>Username</h1>}
        {job ? <h4 className="text-capitalize">{job}</h4> : <h4>job title</h4>}
        <Row className=" m-auto  personal-data">
          <Col lg={4}>{phone ? <h4>{phone}</h4> : <h4>phone</h4>}</Col>
          <Col lg={4}>
            {mail ? (
              <h4>
                <a href={`mailto:${mail}`}>{mail}</a>
              </h4>
            ) : (
              <h4>E-mail</h4>
            )}
          </Col>
          <Col lg={4}>{address ? <h4>{address}</h4> : <h4>Address</h4>}</Col>
        </Row>
        <br />
        <div className="spacer"></div>
        <Row className="summary pt-3 pb-3 align-items-center justify-content-start">
          <Col lg={4}>
            <h4>Summary</h4>
          </Col>
          <Col lg={8}>{breif ? <p>{breif}</p> : <p>breief</p>}</Col>
        </Row>
        <div className="spacer"></div>
        <Row className="experince position-relative pt-3 pb-3 align-items-center">
          <Col lg={4}>
            <h4>Experince</h4>
          </Col>
          <Col lg={8} className="text-start">
            {singleExperinces ? <ul>{singleExperinces}</ul> : <p>Experience</p>}
          </Col>
        </Row>
        <div className="spacer"></div>

        <Row className="projects pt-3 pb-3 align-items-center">
          <Col lg={4}>
            <h4>Projects</h4>
          </Col>
          <Col lg={8} className="text-start">
            {singleProject ? (
              <ul className="position-relative">{singleProject}</ul>
            ) : (
              <ul>
                <li>Project1</li>
              </ul>
            )}
          </Col>
        </Row>
        <div className="spacer"></div>

        <Row className="skills pt-3 pb-3 align-items-center">
          <Col lg={4}>
            <h4>Skills</h4>
          </Col>
          <Col lg={8} className="text-start">
            {skill ? (
              <ul className="skill">{ulSkill}</ul>
            ) : (
              <ul>
                <li>Skill1</li>
                <li>Skill2</li>
                <li>Skill3</li>
              </ul>
            )}{" "}
          </Col>
        </Row>
        <div className="spacer"></div>

        <Row className="languages pt-3 pb-3 align-items-center">
          <Col lg={4}>
            <h4>Languages</h4>
          </Col>
          <Col lg={8} className="text-start">
            {language ? (
              <ul className="lanugae">{singleLanguage}</ul>
            ) : (
              <ul>
                <li>Langaugae1</li>
                <li>Langaugae2</li>
                <li>Langaugae3</li>
              </ul>
            )}{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CVThree;
