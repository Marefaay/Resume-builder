import { createContext, useEffect, useRef, useState } from "react";

// create context
export const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  const [breif, setBreif] = useState("");
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState("");
  const [language, setLanguage] = useState("");
  const [languageProf, setLanguageProf] = useState("");
  const [languages, setLanguages] = useState([]);
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [educationDesc, setEducationDesc] = useState("");
  const [gradutionDate, setGradutionDate] = useState(0);
  const [project, setProject] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectDate, setProjectDate] = useState(0);
  const [projectLink, setProjectLink] = useState("");
  const [projects, setProjects] = useState([]);
  const [experince, setExperince] = useState("");
  const [experinceDate, setExperinceDate] = useState(0);
  const [experinceDesc, setExperinceDesc] = useState("");
  const [experinces, setExperinces] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showJobTitleAlert, setshowJobTitleAlert] = useState(false);
  const [showBrief, setShowBriefAlert] = useState(false);
  const [showPhoneAlert, setshowPhoneAlert] = useState(false);
  const [showEmailAlert, setshowEmailAlert] = useState(false);
  const [showSkillsAlert, setShowSkillsAlert] = useState(false);
  const [showExperinceAlert, setShowExperinceAlert] = useState(false);
  const [showExperinceDescAlert, setShowExperinceDescAlert] = useState(false);
  const [showEducationAlert, setShowEducationAlert] = useState(false);
  const [showEducationDescAlert, setShowEducationDescAlert] = useState(false);
  const [showProjectTitleAlert, setShowProjectTitleAlert] = useState(false);
  const [showProjectLinkAlert, setShowProjectLinkAlert] = useState(false);
  const [showProjectDescAlert, setShowProjectDescAlert] = useState(false);
  const cvRef = useRef(null);
  const handleSubmitClick = () => {
    // cvRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const skills = skill.split(",");

  const ulSkill = skills.map((skil) => {
    return <li>{skil}</li>;
  });
  const educationDescreption = educationDesc.split(",");
  const eduDesc = educationDescreption.map((edu) => {
    return <li>{edu}</li>;
  });
  const singleExperinces = experinces.map((experince) => {
    return (
      <>
        <span id="experince-date">{experince.experinceDate}</span>
        <li>{experince.experince}</li>
        <p>{experince.experinceDesc}</p>
      </>
    );
  });
  const singleProject = projects.map((project) => {
    return (
      <>
        <div id="project-date">
          <a href={project.projectLink}>{project.projectLink}</a>
          <span>{project.projectDate}</span>
        </div>
        <li>{project.project}</li>
        <p>{project.projectDesc}</p>
      </>
    );
  });
  console.log(phone);
  const singleLanguage = languages.map((lang) => {
    return (
      <li id="language-li" className="d-flex gap-3 align-items-center">
          <p>{lang.language}</p>
          <p>{lang.languageProf}</p>
      </li>
    );
  });
  function FormSubmittion() {
    // console.log("Function run");
    let errors = [];
    const phoneRegex = /^(01)(0|1|2|5)[0-9]{8}$/;
    const validPhone = phoneRegex.test(phone);
    // if(username.length===0){
    const mailReg = /^\w+@\w+.com$/gi;
    const mailValid = mailReg.test(mail);
    // }
    if (username.length === 0) {
      setShowAlert(false);
      // console.log(username);
    }
    if (username.trim().length < 15) {
      setShowAlert(true);
      errors.push("Username must be at least 10 characters"); // console.log(username);
    } else {
      setShowAlert(false);
    }
    if (job.length < 10) {
      setshowJobTitleAlert(true);
      errors.push("job title must be at least 10 chars");
    } else {
      setshowJobTitleAlert(false);
    }
    if (breif.length < 25) {
      setShowBriefAlert(true);
      errors.push("Briesf muts be at leat 25 chars");
    } else {
      setShowBriefAlert(false);
    }

    if (validPhone) {
      setshowPhoneAlert(false);
    } else {
      setshowPhoneAlert(true);
      errors.push("Phone must be ");
    }
    if (mailValid) {
      setshowEmailAlert(false);
    } else {
      errors.push("mail muts be at ");
      setshowEmailAlert(true);
    }
    if (address.length < 10) {
      errors.push("address must be at least 10 chars");
    }
    
    // if (experince.length < 10) {
    //   setShowExperinceAlert(true);
    //   errors.push("Experince should be at least 10 chars");
    // } else {
    //   setShowExperinceAlert(false);
    // }
    // if (experinceDesc.length < 10) {
    //   setShowExperinceDescAlert(true);
    //   errors.push("Experince description should be at least 10 chars");
    // } else {
    //   setShowExperinceDescAlert(false);
    // }
    if (education.length < 10) {
      setShowEducationAlert(true);
      errors.push("Education title  should be at least 10 chars");
    } else {
      setShowEducationAlert(false);
    }
    if (educationDesc.length < 25) {
      setShowEducationDescAlert(true);
      errors.push("education description should be at least 25 chars");
    } else {
      setShowEducationDescAlert(false);
    }
    // if (project.length < 8) {
    //   setShowProjectTitleAlert(true);
    //   errors.push("Project title must be at laeats 8 chars");
    // } else {
    //   setShowProjectTitleAlert(false);
    // }
    // if (projectDesc < 25) {
    //   setShowProjectDescAlert(true);
    //         errors.push("project description must be at laeats 10 chars");

    // } else {
    //   setShowProjectDescAlert(false);
    // }
    if (experinces.length === 0) {
      errors.push("You must add at least one experience");
    }
    if (projects.length === 0) {
      errors.push("You must add at least one project");
    }
    if(languages.length===0){
      errors.push("You must add at least one language");

    }

    console.log("OK");
    return errors;
  }
  // useEffect(() => {
  //   FormSubmittion();
  // }, [
  //   username,
  //   job,
  //   breif,
  //   phone,
  //   mail,
  //   skill,
  //   experince,
  //   experinceDate,
  //   experinceDesc,
  // ]); //  runs when values change

  // console.log(validPhone)
  function AddLanguage() {
    const newLangauage = {
      language,
      languageProf,
    };
    setLanguages((prev) => [...prev, newLangauage]);
    setLanguage(" ");
  }
  console.log(languages);
  function AddExperince() {
    const newExperince = {
      experince,
      experinceDate,
      experinceDesc,
    };
    setExperinces((prev) => [...prev, newExperince]); //append to old experinces
    setExperince(" ");
    setExperinceDate(0);
    setExperinceDesc(" ");
  }
  console.log(experinces);

  function Addproject() {
    const newProject = {
      project,
      projectDesc,
      projectDate,
      projectLink,
    };
    console.log(newProject);

    console.log(projects);
    setProjects((prev) => [...prev, newProject]); //append to old arrray prev
    setProject(" ");
    setProjectDesc(" ");
    setProjectDate(0);
    setProjectLink(" ");
  }
  console.log(projects);
  return (
    <ThemeContext.Provider
      value={{
        Addproject,
        AddLanguage,
        language,
        singleLanguage,
        languageProf,
        setLanguage,
        setLanguageProf,
        address,
        setAddress,
        handleSubmitClick,
        cvRef,
        showEducationAlert,
        showProjectLinkAlert,
        setShowProjectLinkAlert,
        showProjectDescAlert,
        setShowProjectDescAlert,
        setShowEducationAlert,
        showPhoneAlert,
        showEducationDescAlert,
        setShowEducationDescAlert,
        showProjectTitleAlert,
        setShowProjectTitleAlert,
        showExperinceDescAlert,
        setShowExperinceDescAlert,
        setshowPhoneAlert,
        showSkillsAlert,
        setShowSkillsAlert,
        showExperinceAlert,
        setShowExperinceAlert,
        showEmailAlert,
        setshowEmailAlert,
        showBrief,
        languages,
        setShowBriefAlert,
        showJobTitleAlert,
        setshowJobTitleAlert,
        singleExperinces,
        AddExperince,
        experinceDate,
        setExperinceDate,
        projectLink,
        setProjectLink,
        singleProject,
        ulSkill,
        eduDesc,
        projectDate,
        setProjectDate,
        showAlert,
        gradutionDate,
        setGradutionDate,
        FormSubmittion,
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
        setProjectDesc,
        projects,
        setProjects,
        experince,
        setExperince,
        experinceDesc,
        setExperinceDesc,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
