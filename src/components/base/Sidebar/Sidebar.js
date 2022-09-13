import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive((current) => !current);
  // };

  // const tasks = () => {
  //   navigate("/dashboard/tasks");
  // };

  <NavLink
    to={{
      pathname: "/user",
      search: "?id=1",
      hash: "#hash",
      state: { isAdmin: true },
    }}
    activeStyle={{ background: "red", color: "white" }}
    isActive={(match, location) => {
      if (!match) {
        return false;
      }
      const searchParams = new URLSearchParams(location.search);
      return match.isExact && searchParams.has("id");
    }}
  >
    {" "}
    User
  </NavLink>;


  return (
    <>
      <div className="sidenav">
        <i className="fa fa-bars iconic icon3" aria-hidden="true"></i>
        <NavLink
          className="navbar-item"
          to="/dashboard"
          // style={({ isActive }) =>
          //   isActive
          //     ? {
          //         color: "#fff",
          //         background: "black",
          //       }
          //     : { color: "", background: "" }
          // }
        >
          Home
        </NavLink>
        <NavLink className="navbar-item" to="/dashboard/tasks">
          Tasks
        </NavLink>
        <NavLink className="navbar-item" to="/dashboard/requests">
          Request
        </NavLink>
        <NavLink className="navbar-item" to="/dashboard/settings">
          Settings
        </NavLink>
        <a href="/" onClick={logout}>
          Logout
        </a>
      </div>
    </>
  );
};

export default Sidebar;
