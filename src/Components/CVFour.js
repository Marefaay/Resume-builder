import { Col, Container, Row } from "react-bootstrap";
import "../Css/CVFour.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
function CVFour() {
  const {
    username,
    language,
    singleLanguage,
    address,
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
      <Container className="cv-four">
        <div className="cv4-header">
          <div className="cv-header-content">
            {username ? <h4 id="user">{username}</h4> : <h4>username</h4>}
            <span></span>
            {job ? <h5>{job}</h5> : <h5>Job title</h5>}
          </div>
        </div>
        <Row className=" p-4">
          <Col lg={4}>
            <h4>Details</h4>
            {mail ? <p>{mail}</p> : <p>E-mail</p>}
            {phone ? <p>{phone}</p> : <p>Phone</p>}
            {address ? <p>{address}</p> : <p>Address</p>}
            <br />
            <h4>Skills</h4>
            {skill ? (
              <ul>{ulSkill}</ul>
            ) : (
              <ul>
                <li>Skill1</li>
                <li>Skill2</li>
                <li>Skill3</li>
              </ul>
            )}
            <br />
            <h4>Langiages</h4>
            {language ? (
              <ul className="lanugae">{singleLanguage}</ul>
            ) : (
              <ul>
                <li>Langaugae1</li>
                <li>Langaugae2</li>
                <li>Langaugae3</li>
              </ul>
            )}
          </Col>
          <Col lg={8} className="position-relative">
            <div className="hrz-spacer"></div>
            <h4>PROFILE</h4>
            {breif ? <p>{breif}</p> : <p>Breif</p>}
            <br />
            <h4>EMPLOYMENTS</h4>
            {singleExperinces ? <ul>{singleExperinces}</ul> : <p>Experience</p>}
            <br />
            <h4>EDUCATIONS</h4>
            <Row className=" justify-content-between align-items-center">
              <Col lg={4} md={12} sm={12}>
                {gradutionDate ? (
                  <h4>{gradutionDate}</h4>
                ) : (
                  <h4>gradutionDate</h4>
                )}
                {education ? <h6>{education}</h6> : <h6>unevirsity</h6>}
              </Col>
              <Col lg={8} md={12} sm={12}>
                {educationDesc ? <p>{eduDesc}</p> : <p>Education descriptin</p>}
              </Col>
            </Row>
            <br />
            <h4>PROJECTS</h4>
            {singleProject ? (
              <ul className="position-relative">{singleProject}</ul>
            ) : (
              <ul>
                <li>Project1</li>
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CVFour;
