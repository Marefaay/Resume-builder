import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Button, Col, Row } from "react-bootstrap";
import "../Css/CVOne.css";
import CircularProgress from "@mui/material/CircularProgress";

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

        <motion.div variants={sectionVariants} className="text-center job-title">
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
          {education ? <h4 className="education-head">{education}</h4> : <h4>Education title</h4>}
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
    <PDFDownloadLink
  document={
    <ExportPDF
      username={username}
      job={job}
      breif={breif}
      phone={phone}
      mail={mail}
      address={address}
      skills={skill}
      languages={language}
      projects={projects}
      experiences={experince}
      education={education}
      gradutionDate={gradutionDate}
    />
  }
  fileName="My_CV.pdf"
>
  {({ loading }) =>
    loading ? (
      <Button disabled>
        <CircularProgress size={20} />
      </Button>
    ) : (
      <Button variant="dark">Download CV as PDF</Button>
    )
  }
</PDFDownloadLink>

    </>
  );
}
export default CVOne;
