import "./Sidebar.css";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const tasks = () =>{
    navigate("/dashboard/tasks");
  };

  return (
    <>
      <div className="sidenav">
        <i className="fa fa-bars iconic icon3" aria-hidden="true"></i>
        <a href="/dashboard">Home</a>
        <a href="/dashboard/tasks" onClick={tasks}>Tasks</a>
        <a href="/">Request</a>
        <a href="/">Settings</a>
        <a href="/" onClick={logout}>
          Logout
        </a>
      </div>
    </>
  );
};

export default Sidebar;
