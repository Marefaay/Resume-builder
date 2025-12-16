import  SyncLoader from "react-spinners/SyncLoader";

import "../Css/Overlay.css";
const Overlay = () => {
  return <div className="overlay"><SyncLoader  className="loader" size={30} color="#38b2ac"/></div>;
};
export default Overlay;