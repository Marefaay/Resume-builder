// import logo from './logo.svg';
// import './App.css';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import SelectTemplate from "./Components/SelectTemplate";
import Theme1 from "./Components/Theme1";
import Theme2 from "./Components/Theme2";
import PersonalData from "./Components/PersonalData";
import Education from "./Components/Education";
import TechnicalSkills from "./Components/TechnicalSkills";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
// import CV1 from "./Components/CVOne";
import CVOne from "./Components/CVOne";
import Theme3 from "./Components/Theme3";
import CVTwo from "./Components/CVTwo";
import CVThree from "./Components/CVThree";
import Language from "./Components/Langauge";
import Theme4 from "./Components/Theme4";
import CVFour from "./Components/CVFour";
import { ModeContext } from "./Context/DarkAndLightModeContext";
import { useContext } from "react";
import LoginAndRegister from "./Components/LoginAndRegister";
import Login from "./Components/Login";
import Register from "./Components/Regsiter";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
function App() {
  const { getMode } = useContext(ModeContext);
  getMode();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/create" /> */}
        <Route path="/select-template" element={<SelectTemplate />} />
        <Route path="/theme1" element={<Theme1 />} />
        <Route path="/theme2" element={<Theme2 />} />
        <Route path="/theme3" element={<Theme3 />} />
        <Route path="/theme4" element={<Theme4 />} />
        <Route path="/cv-one" element={<CVOne />} />
        <Route path="/cv-two" element={<CVTwo />} />
        <Route path="/cv-three" element={<CVThree />} />
        <Route path="/cv-four" element={<CVFour />} />

        <Route path="/theme1/" element={<Theme1 />}>
          <Route path="" element={<PersonalData />} />
          <Route path="personal-data" element={<PersonalData />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<TechnicalSkills />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="languages" element={<Language />} />
        </Route>
        <Route path="/theme2/" element={<Theme2 />}>
          <Route path="" element={<PersonalData />} />
          <Route path="personal-data" element={<PersonalData />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<TechnicalSkills />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="languages" element={<Language />} />
        </Route>
        <Route path="/theme3/" element={<Theme3 />}>
          <Route path="" element={<PersonalData />} />
          <Route path="personal-data" element={<PersonalData />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<TechnicalSkills />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="languages" element={<Language />} />
        </Route>
        <Route path="/theme4/" element={<Theme4 />}>
          <Route path="" element={<PersonalData />} />
          <Route path="personal-data" element={<PersonalData />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<TechnicalSkills />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="languages" element={<Language />} />
        </Route>
        <Route path="/login/" element={<LoginAndRegister />}>
          <Route path="" element={<Login />} />
          <Route path="login-form" element={<Login />} />
          <Route path="register-form" element={<Register />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
