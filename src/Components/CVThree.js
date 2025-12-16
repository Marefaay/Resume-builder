import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Col, Container, Row } from "react-bootstrap";
import "../Css/CVThree.css";
  import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
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
    cvRef,  experinces,
  
    skills,
  } = useContext(ThemeContext);


const exportCVThreeToWord = () => {
 

 

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8"/>
  </head>
  <body style="font-family: Arial, Helvetica, sans-serif; padding:30px;">

    <h1>${username || "Username"}</h1>
    <h4>${job || "Job Title"}</h4>
    <p>${breif || "Brief"}</p>

    <hr style="border:1px solid #8e8e8e; margin:20px 0;" />

    <h4>Contact</h4>
    <p><b>Phone:</b> ${phone || "Phone number"}</p>
    <p><b>Email:</b> ${mail || "Email address"}</p>
    <p><b>Address:</b> ${address || "Address"}</p>

    <hr style="border:1px solid #8e8e8e; margin:20px 0;" />

    <h4>Skills</h4>
    ${skills.map((lk) => {
    return `<ul>
      <li>${lk}</li>
      </ul>
      `;
  })}

    <hr style="border:1px solid #8e8e8e; margin:20px 0;" />

    <h4>Languages</h4>
    ${languages.map((lang) => {
            return `
             <ul>
              <li>${lang.language} ${lang.languageProf}</li>
          
              </ul>
              
              `;
          })}

    <hr style="border:1px solid #8e8e8e; margin:20px 0;" />

    <h4>Projects</h4>
    ${projects.map((sp) => {
          return `<ul>
          <li>${sp.project} ${sp.projectDate}</li>
         
          <p style="text-align:justify">${sp.projectDesc}</p>
          
          </ul>
          
          `;
        })}
    <hr style="border:1px solid #8e8e8e; margin:20px 0;" />

    <h4>Experience</h4>
   ${experinces.map((ex) => {
            return `
              
              <ul>
              
              <li>${ex.experince} ${ex.experinceDate}</li>
             
              <p style="text-align:justify;">${ex.experinceDesc}</p>
              </ul>
              `;
          })}

    <hr style="border:1px solid #8e8e8e; margin:20px 0;" />

    <h4>Education</h4>
    <p><b>${education || "University"}</b></p>
    <p>${gradutionDate || "Graduation Year"}</p>
    <p>${educationDesc || "Education description"}</p>

  </body>
  </html>
  `;

  const blob = htmlDocx.asBlob(html);
  saveAs(blob, `${username}.docx`);
};

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
        <Container className="w-100">
               <button className="mt-3 mb-3 " id="download-cv-btn" onClick={exportCVThreeToWord}>
                Download Word
              </button>
             </Container>
    </>
  );
}
export default CVThree;
