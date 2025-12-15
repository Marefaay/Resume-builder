import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [userfromLocalStorage, setUserFromLocalStorage] = useState(
    localStorage.getItem("user")
  );

  function loginOrRegister(username) {
    setUserFromLocalStorage(username);
    localStorage.setItem("user", username);
  }

  function Logout() {
    setUserFromLocalStorage(null);
    localStorage.removeItem("user");
  }

 
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoadingUsers(false);
      })
      .catch(() => setLoadingUsers(false));
  }, []);

  function loginSubmittion(type, userName = "", email = "", password = "") {
    let errors = [];

    const mailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const existUser = users.find((user) => user.mail === email);

    if (type === "login") {
      if (!mailReg.test(email)) {
        errors.push("Mail must be like name@example.com");
      }

      if (!existUser) {
        errors.push("Email does not exist");
      } else {
        if (!passReg.test(password)) {
          errors.push(
            "Password must be at least 8 chars, contain uppercase, lowercase, number and special character"
          );
        } else if (existUser.password !== password) {
          errors.push("Incorrect password");
        }
      }
    }

    if (type === "register") {
      if (!userName || userName.length < 10) {
        errors.push("User name must be at least 10 characters");
      }

      if (!mailReg.test(email)) {
        errors.push("Mail must be like name@example.com");
      }

      if (existUser) {
        errors.push("Email is already exist");
      }

      if (!passReg.test(password)) {
        errors.push(
          "Password must be at least 8 chars, contain uppercase, lowercase, number and special character"
        );
      }
    }

    return errors;
  }

  return (
    <AuthContext.Provider
      value={{
        loginMail,
        setLoginMail,
        loginPassword,
        setLoginPassword,
        loginUserName,
        setLoginUserName,
        loginSubmittion,
        loginOrRegister,
        Logout,
        userfromLocalStorage,
        loadingUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
