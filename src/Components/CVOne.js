import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Css/CVOne.css";
import CircularProgress from "@mui/material/CircularProgress";
import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ExportPDF from "./ExportPDF";
function CVOne() {
  const {
    username,
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
    language,
    singleLanguage,
    experinces,
    languages,
    skills,
  } = useContext(ThemeContext);

  // const btnRef = useRef(null);
  // const cv1Element = cvRef.current;
  // const downloadBtn = btnRef.current;

  const [openModal, setOpenModal] = useState(false);
  const validationErrors = FormSubmittion();

  function handleSubmit(e) {
    if (validationErrors.length === 0) {
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
        // if (cv1Element) cv1Element.style.display = "block";
        // if (downloadBtn) downloadBtn.style.right = "150px";
        handleSubmitClick();
      }, 3000);
    } else {
      e.preventDefault();
      setOpenModal(true);
    }
  }

  // Framer Motion variants for CV sections
  const sectionVariants = {
    // hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const exportCVOneToWord = () => {
    const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8"/>
  </head>
  <body style="font-family: Arial, Helvetica, sans-serif; padding:30px;">

    <div style="
      width: 80%; 
      border: 2px solid #007bff; 
      border-radius: 15px; 
      padding: 30px; 
      margin: 30px auto; 
      position: relative;
    ">
      <!-- Name -->
      <div style="color:#007bff; text-transform: capitalize; font-size:2rem; font-weight:bold; text-align:center;">
        ${username || "Username"}
      </div>

      <!-- Job Title -->
      <div style="text-align:center; color:#000; margin-top:10px;">
        ${job || "Job Title"}
      </div>

      <!-- Contact -->
      <div style="display:flex; justify-content:center; gap:20px; margin-top:20px; color:#555;">
        <div>${
          mail
            ? `<a href="mailto:${mail}" style="text-decoration:none; color:#555;">${mail}</a>`
            : "E-mail"
        }</div>
        <div>${phone || "Phone"}</div>
        <div>${address || "Address"}</div>
      </div>

      <!-- Brief -->
      <p style="text-align:justify; color:#000; margin-top:20px;">
        ${breif || "Brief"}
      </p>


      <!-- Skills -->
      <h4 style="
        background-color:#007bff; color:#fff; padding:5px 10px; border-radius:15px; display:inline-block;
      ">Technical Skills</h4>
      <ul style="display:grid; grid-template-columns:1fr 1fr; padding-left:20px;">
        ${skills.map((lk) => {
          return `<ul>
      <li>${lk}</li>
      </ul>
      `;
        })}
      </ul>


      <!-- Languages -->
      <h4 style="
        background-color:#007bff; color:#fff; padding:5px 10px; border-radius:15px; display:inline-block;
      ">Languages</h4>
      <ul style="padding-left:20px;">
 ${languages.map((lang) => {
   return `
             <ul>
              <li>${lang.language} ${lang.languageProf}</li>
          
              </ul>
              
              `;
 })}      </ul>


      <!-- Projects -->
      <h4 style="
        background-color:#007bff; color:#fff; padding:5px 10px; border-radius:15px; display:inline-block;
      ">Projects</h4>
      <ul style="padding-left:20px;">
  ${projects.map((sp) => {
    return `<ul>
          <li>${sp.project} ${sp.projectDate}</li>
         
          <p style="text-align:justify">${sp.projectDesc}</p>
          
          </ul>
          
          `;
  })}      </ul>


      <!-- Experience -->
      <h4 style="
        background-color:#007bff; color:#fff; padding:5px 10px; border-radius:15px; display:inline-block;
      ">Experience</h4>
      <ul style="padding-left:20px;">
 ${experinces.map((ex) => {
   return `
              
              <ul>
              
              <li>${ex.experince} ${ex.experinceDate}</li>
             
              <p style="text-align:justify;">${ex.experinceDesc}</p>
              </ul>
              `;
 })}      </ul>


      <!-- Education -->
      <h4 style="
        background-color:#007bff; color:#fff; padding:5px 10px; border-radius:15px; display:inline-block;
      ">Education</h4>
      <p style="font-weight:bold;">${education || "University"}</p>
      <div style="
        background-color:#007bff; color:#fff; padding:5px 10px; border-radius:15px; display:inline-block;
      ">${gradutionDate || "Graduation Year"}</div>
      <ul style="padding-left:20px;">
        ${educationDesc || "Education Description"}
      </ul>

    </div>

  </body>
  </html>
  `;

    const blob = htmlDocx.asBlob(html);
    saveAs(blob, `${username}.docx`);
  };

  return (
    <>
      <motion.div
        className="cv1 mt-5"
        // ref={cvRef}
        initial="visible"
        animate="visible"
        // animate={cv1Element && cv1Element.style.display === "block" ? "visible" : "hidden"}
        variants={{
          // hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        // style={{ display: "none" }}
      >
        {/* Each section as motion.div */}
        <motion.div
          variants={sectionVariants}
          className="name text-center mt-3 mb-3"
        >
          {username ? <h1>{username}</h1> : <h1>username</h1>}
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="contact mt-3 mb-3 m-auto"
        >
          <Row className="text-center justify-content-center">
            <Col lg={4}>
              {" "}
              {mail ? (
                <h4>
                  <a href={`mailto:${mail}`}>{mail}</a>
                </h4>
              ) : (
                <h4>e-mail</h4>
              )}
            </Col>
            <Col lg={4}>{phone ? <h4>{phone}</h4> : <h4>phone</h4>}</Col>
            <Col lg={4}> {address ? <h4>{address}</h4> : <h4>Address</h4>}</Col>
          </Row>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="text-center job-title"
        >
          {job ? <h4>{job}</h4> : <h4>job title</h4>}
        </motion.div>

        <motion.div variants={sectionVariants} className="text-center">
          {breif ? <p>{breif}</p> : <p>breif</p>}
        </motion.div>

        <motion.div variants={sectionVariants} className="Skills mt-3 mb-5">
          <h4 className="head-section">TECHNICAL SKILLS</h4>
          {skill ? <ul className="skill">{ulSkill}</ul> : <h4>Skills</h4>}
        </motion.div>
        <motion.div variants={sectionVariants} className="Skills mt-3 mb-5">
          <h4 className="head-section">Languages</h4>
          {language ? (
            <ul className="lanugae">{singleLanguage}</ul>
          ) : (
            <ul>
              <li>Langaugae1</li>
              <li>Langaugae2</li>
              <li>Langaugae3</li>
            </ul>
          )}{" "}
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="education mt-5 mb-5 position-relative"
        >
          <h4 className="head-section">Education</h4>
          {education ? (
            <h4 className="education-head">{education}</h4>
          ) : (
            <h4>Education title</h4>
          )}
          {educationDesc ? <ul>{eduDesc}</ul> : <h4>Education Description</h4>}
          <div id="gradution-date">{gradutionDate}</div>
        </motion.div>

        <motion.div variants={sectionVariants} className="projects mt-5 mb-5">
          <h4 className="head-section">Projects</h4>
          {singleProject ? (
            <ul className="position-relative">{singleProject}</ul>
          ) : (
            <h4>Projects</h4>
          )}
        </motion.div>

        <motion.div variants={sectionVariants} className="experince mt-5 mb-5">
          <h4 className="head-section">WORK EXPERIENCE</h4>
          {singleExperinces ? (
            <ul className="ex-ul">{singleExperinces}</ul>
          ) : (
            <p>Experience</p>
          )}
        </motion.div>
      </motion.div>
        <Container className="w-100">
               <button className="mt-3 mb-3 " id="download-cv-btn" onClick={exportCVOneToWord}>
                Download Word
              </button>
             </Container>
    </>
  );
}
export default CVOne;
