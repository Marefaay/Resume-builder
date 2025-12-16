import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../Css/CVTwo.css";
import ProfileImage from "../Images/developer.jpg";
import htmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";
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
    experinces,
    languages,
    skills,
  } = useContext(ThemeContext);

  const exportWordStyled = () => {
    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px;
  }

  .cv {
    width: 100%;
    border: 2px solid #8e8e8e;
    border-radius: 12px;
    padding: 25px;
  }

  h1 {
    margin: 0;
    color: #000;
  }

  h4, h5, h6, li {
    color: #000;
  }

  p {
    color: #444;
    text-align: justify;
  }

  .spacer {
    width: 100% !important;
    height: 3px !important;
    background: #8e8e8e;
    margin: 20px 0;
    border-radius: 10px;
  }

  .column-spacer {
    width: 80%;
    height: 3px;
    background: #8e8e8e;
    margin: 20px 0;
    border-radius: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    vertical-align: top;
   
  }

  .left {
    width: 30%;
  }

  .right {
    width: 70%;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  ul {
    padding-left: 18px;
  }

</style>
</head>

<body>

<div class="cv">

  <!-- HEADER -->
  <table style="width:100%; border-collapse:collapse;>
    <tr>
      <td>
        <h1 style="margin:0; color:#000;">${username || "Username"}</h1>
        <h4 style="color:#000;">${job || "Job Title"}</h4>
        <p style="color:#444; text-align:justify;">${breif || "Brief"}</p>
      </td>
    
    </tr>
  </table>
      <div style="width:100%; height:3px; background:#8e8e8e; margin:20px 0;"></div>



  <!-- BODY -->
  <table style="width:100%; border-collapse:collapse;">
    <tr>
      <!-- LEFT -->
      <td class="left" style="width:30%; vertical-align:top; padding:10px;">
        <h2 style="color:#000;">Contact</h2>
        <p><b>Phone:</b><br/> ${phone || "Phone number"}</p>
        <p><b>Email:</b><br/> ${mail || "Email address"}</p>
        <p><b>Address:</b><br/> ${address || "Address"}</p>

            <div style="width:80%; height:3px; background:#8e8e8e; margin:20px 0;"></div>

        <h4 style="color:#000; border-top:2px solid #8e8e8e;paddding-top:10px;">Skills</h4>

  ${skills.map((lk) => {
    return `<ul>
      <li>${lk}</li>
      </ul>
      `;
  })}



            <div style="width:80%; height:3px; background:#8e8e8e; margin:20px 0;"></div>

        <h4 style="color:#000; border-top:2px solid #8e8e8e ;padding-top:10px;">Languages</h4>
        
          ${languages.map((lang) => {
            return `
             <ul>
              <li>${lang.language} ${lang.languageProf}</li>
          
              </ul>
              
              `;
          })}
       
      </td>

      <!-- RIGHT -->
      <td class="right" style="width:70%; vertical-align:top; padding:10px; border-left:2px solid #8e8e8e">
        <h4 style="color:#000; ">Projects</h4>
        ${projects.map((sp) => {
          return `<ul>
          <li>${sp.project} ${sp.projectDate}</li>
         
          <p style="text-align:justify">${sp.projectDesc}</p>
          
          </ul>
          
          `;
        })}

            <div style="width:80%; height:3px; background:#8e8e8e; margin:20px 0;"></div>

        <h4 style="color:#000;border-top:2px solid #8e8e8e padding-top:10px;">Experience</h4>
        
          ${experinces.map((ex) => {
            return `
              
              <ul>
              
              <li>${ex.experince} ${ex.experinceDate}</li>
             
              <p style="text-align:justify;">${ex.experinceDesc}</p>
              </ul>
              `;
          })}
        

            <div style="width:80%; height:3px; background:#8e8e8e; margin:20px 0;"></div>

        <h4 style="border-top:1px solid #8e8e8e ;padding-top:10px;">Education</h4>
        <p><b>${education || "University"}</b></p>
        <p>${gradutionDate || "Graduation Year"}</p>
        <p style="text-align:justify;">${
          educationDesc || "Education description"
        }</p>
      </td>
    </tr>
  </table>

</div>

</body>
</html>
`;

    const blob = htmlDocx.asBlob(html);
    saveAs(blob, `${username}.docx`);
  };

  return (
    <>
      <Container className="cv-two mt-5 p-5 ">
        <Row className="justify-content-between align-items-center personal p-3">
          <Col lg={12} sm={12}>
            {username ? <h1>{username}</h1> : <h1>Username</h1>}
            {job ? <h4>{job}</h4> : <h4>job title</h4>}
            {breif ? <p>{breif}</p> : <p>Brief</p>}
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
       <Container className="w-100">
         <button className="mt-3 mb-3 " id="download-cv-btn" onClick={exportWordStyled}>
          Download Word
        </button>
       </Container>
    </>
  );
}
export default CVTwo;
