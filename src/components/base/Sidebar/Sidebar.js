import "./Sidebar.css";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="sidenav">
        <i className="fa fa-bars iconic icon3" aria-hidden="true"></i>
        <a href="/">Home</a>
        <a href="/">Tasks</a>
        <a href="/">Settings</a>
        <a href="/" onClick={logout}>Logout</a>
      </div>
    </>
  );
};

export default Sidebar;
