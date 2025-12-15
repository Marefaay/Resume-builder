import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../Css/CVTwo.css";
import ProfileImage from "../Images/developer.jpg";
function CVTwo() {
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
      <Container className="cv-two mt-5 p-5 ">
        <Row className="justify-content-between align-items-center personal p-3">
          <Col lg={8} sm={12}>
            {username ? <h1>{username}</h1> : <h1>Username</h1>}
            {job ? <h4>{job}</h4> : <h4>job title</h4>}
            {breif ? <p>{breif}</p> : <p>Brief</p>}
          </Col>
          <Col lg={4} sm={12}>
            <Image
              className="person-image  ms-5"
              src={ProfileImage}
              alt="profileimage"
              fluid
            />
          </Col>
        </Row>
        <div className="spacer"></div>
        <Row className="mt-4 pt-3">
          <Col lg={4} md={12} sm={12}>
            <h4>Contact</h4>
            <h5>Phone</h5>
            {phone ? <h6>{phone}</h6> : <h6>Phone number</h6>}
            <br />
            <h5>Email</h5>
            {mail ? <h6>{mail}</h6> : <h6>E-mail address</h6>}
            <br />
            <h5>Address</h5>
            <Col lg={4}>{address ? <p>{address}</p> : <h4>Address</h4>}</Col>
            <div className="column-spacer"></div>
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
            <div className="spacer w-75"></div>
            <h4>Langaugaes</h4>
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
          <Col lg={8} md={12} sm={12} className="  position-relative">
            <div className="hrz-spacer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h4>Projects</h4>
            {singleProject ? (
              <ul className="position-relative">{singleProject}</ul>
            ) : (
              <ul>
                <li>Project1</li>
              </ul>
            )}
            <br />
            <div className="column-spacer"></div>
            <h4>Experience</h4>
            {singleExperinces ? <ul>{singleExperinces}</ul> : <p>Experience</p>}
            <br />
            <div className="column-spacer"></div>

            <h4>Education</h4>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CVTwo;
