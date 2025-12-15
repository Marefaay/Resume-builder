import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Button, Modal } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
function ShowCVBtn(props){
   const {
      handleSubmitClick,FormSubmittion,
      cvRef,
    } = useContext(ThemeContext);
    // const sectionVariants = {
    //   hidden: { opacity: 0, y: 50 },
    //   visible: { opacity: 1, y: 0 },
    // };
    // const btnRef = useRef(null);
    // const cv1Element = cvRef.current;
    // const downloadBtn = btnRef.current;
  
    const [openModal, setOpenModal] = useState(false);
    const validationErrors = FormSubmittion();
  const navigate=useNavigate()
    function handleSubmit(e) {
      if (validationErrors.length === 0) {
        setOpenModal(true);
        setTimeout(() => {
          setOpenModal(false);
          navigate(`${props.url}`)
        
        }, 3000);
      } else {
        e.preventDefault();
        setOpenModal(true);
      }
    }
  return(
    <>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.8}}
    >
     <Button id="submit-btn" className="mt-3 position-fixed end-0 bottom-0 w-25" onClick={handleSubmit}>
              Show CV
            </Button>
            </motion.div>
            <Modal show={openModal} onHide={() => setOpenModal(false)}>
              <Modal.Body>
                {validationErrors.length === 0 ? (
                  <div className="text-center">
                    <h3>Your CV is being created</h3>
                    <CircularProgress />
                  </div>
                ) : (
                  <ul>
                    {validationErrors.map((err, idx) => (
                      <li key={idx} style={{ color: "red" }}>
                        {err}
                      </li>
                    ))}
                  </ul>
                )}
              </Modal.Body>
              {validationErrors.length !== 0 && (
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setOpenModal(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              )}
            </Modal>
    </>
  )
}
export default ShowCVBtn