import { parseUserName } from "../../../services/auth";
import "./Header.css";

const Header = () => {

  return (
    <>
      <div className="topnav" id="myTopnav">
        <div className="fa-div">
          <p className="fa-p">
            { parseUserName()}
            <i className="fa fa-user iconic" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
