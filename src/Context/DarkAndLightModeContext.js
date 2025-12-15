import { createContext, useState } from "react";

export const ModeContext = createContext();
function DarkAndLightModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  function getMode() {
    if (localStorage.getItem("mode") === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }else{
      setDarkMode(false);
      document.body.classList.remove("dark-mode");

    }
  }
  function ToggleMode() {
    if (darkMode === false) {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
      console.log("DArk mode");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
      // document.body.style.backgroundColor="#fff"
      console.log("ligh mode");
    }
  }
  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode, ToggleMode,getMode }}>
      {children}
    </ModeContext.Provider>
  );
}
export default DarkAndLightModeProvider;
