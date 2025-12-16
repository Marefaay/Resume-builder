import { Col, Container, Row } from "react-bootstrap";
import "../Css/CVFour.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
  import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
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
     experinces,
    languages,
    skills,
  } = useContext(ThemeContext);


 const exportCVFourToWord = (data) => {
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8"/>
  </head>
  <body style="font-family: Arial, Helvetica, sans-serif; margin:0; padding:0;">

    <!-- Outer table -->
    <table style="width:100%; border:2px solid #767575; border-radius:15px; margin:50px auto; border-collapse:collapse;">
      <!-- Header -->
      <tr>
        <td colspan="2" style="background-color:#2a2929; color:#fff; text-align:center; padding:20px; border-top-left-radius:15px; border-top-right-radius:15px;">
          <div style="border:2px solid #767575; width:50%; margin:auto; padding:20px;">
            <h4 style="color:#fff; margin:0;">${username || "Username"}</h4>
            <span style="display:block; background-color:#fff; width:20%; height:2px; margin:10px auto;"></span>
            <h5 style="color:#fff; margin:0;">${job || "Job Title"}</h5>
          </div>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <!-- Left Column -->
        <td style="width:30%; padding:20px; vertical-align:top; border-right:2px solid #767575;">
          <h4>Details</h4>
          <p>${mail || "E-mail"}</p>
          <p>${phone || "Phone"}</p>
          <p>${address || "Address"}</p>

          <h4>Skills</h4>
         ${skills.map((lk) => {
    return `<ul>
      <li>${lk}</li>
      </ul>
      `;
  })}

          <h4>Languages</h4>
          ${languages.map((lang) => {
            return `
             <ul>
              <li>${lang.language} ${lang.languageProf}</li>
          
              </ul>
              
              `;
          })}
        </td>

        <!-- Right Column -->
        <td style="width:70%; padding:20px; vertical-align:top;">
          <!-- Spacer -->
          <table style="width:100%; height:100%; border-collapse:collapse;">
            <tr>
              <td style="width:1%; background-color:#000;"></td>
              <td style="width:99%; padding-left:10px; vertical-align:top;">

                <h4>Profile</h4>
                <p>${breif || "Brief"}</p>

                <h4>Employments</h4>
                ${experinces.map((ex) => {
            return `
              
              <ul>
              
              <li>${ex.experince} ${ex.experinceDate}</li>
             
              <p style="text-align:justify;">${ex.experinceDesc}</p>
              </ul>
              `;
          })}

                <h4>Education</h4>
                <table style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="width:30%; vertical-align:top;">
                      <h4>${gradutionDate || "Graduation Date"}</h4>
                      <h6>${education || "University"}</h6>
                    </td>
                    <td style="width:70%; vertical-align:top;">
                      <p>${educationDesc || "Education Description"}</p>
                    </td>
                  </tr>
                </table>

                <h4>Projects</h4>
                ${projects.map((sp) => {
          return `<ul>
          <li>${sp.project} ${sp.projectDate}</li>
         
          <p style="text-align:justify">${sp.projectDesc}</p>
          
          </ul>
          
          `;
        })}


              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  const blob = htmlDocx.asBlob(html);
  saveAs(blob, `${username}.docx`);
};

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
        <Container className="w-100">
               <button className="mt-3 mb-3 " id="download-cv-btn" onClick={exportCVFourToWord}>
                Download Word
              </button>
             </Container>
    </>
  );
}
export default CVFour;
