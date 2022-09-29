import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { parseUserName, authUser } from "../../../services/auth";
import "./Header.css";


const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // if(!authUser()) {
    //   navigate("/");
    // }
    if(authUser() === false) {
      navigate("/");
    }

  }, [navigate]);
  // function myFunction() {
  //   var popup = document.getElementById("myPopup");
  //   popup.classList.toggle("show");
  // }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <div className="fa-div">
          <p className="fa-p">
            {parseUserName()}
            <i
              className="fa fa-user iconic"
              // onClick={myFunction()}
              aria-hidden="true"
            ></i>
          </p>
          {/* <span className="popuptext" id="myPopup">
            A Simple Popup!
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Header;
