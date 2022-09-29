import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const [links, setLinks] = useState();

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  console.log(window.location);
 const mediaQuery = window.matchMedia("(min-width: 601px)");
 function mediaResponse() {
   if (mediaQuery.matches) 
   {
     document.getElementById("nav").style.display = "block";  
     document.getElementById("icon").style.display = "none";   
 } else {
  document.getElementById("nav").style.display = "none";
  document.getElementById("icon").style.display = "block";
 }}
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive((current) => !current);
  // };

  // const tasks = () => {
  //   navigate("/dashboard/tasks");
  // };

  // <NavLink
  //   to={{
  //     pathname: "/user",
  //     search: "?id=1",
  //     hash: "#hash",
  //     state: { isAdmin: true },
  //   }}
  //   activeStyle={{ background: "red", color: "white" }}
  //   isActive={(match, location) => {
  //     if (!match) {
  //       return false;
  //     }
  //     const searchParams = new URLSearchParams(location.search);
  //     return match.isExact && searchParams.has("id");
  //   }}
  // >
  //   {" "}
  //   User
  // </NavLink>;
  useEffect(() => {
    // mediaResponse();
  })
 


  return (
    <>
      <div className="sidenav">
        <i className="fa fa-bars iconic1 icon4" aria-hidden="true"></i>
        <NavLink
          // className="navbar-item"
          to="/dashboard"
          onClick={() => setLinks(0)}
          className={
            links === 0 || window.location.pathname === "/dashboard"
              ? "is-active"
              : null
          }
          // isActive
          //   ? {
          //       color: "#fff",
          //       background: "black",
          //     }
          //   : { color: "#000", background: "#000" }
          // }
        >
          <p id="nav">Home</p>
          {/* <i id="icon" className="fa fa-home" aria-hidden="true"></i> */}
        </NavLink>
        <NavLink
          to="/dashboard/tasks"
          onClick={() => setLinks(1)}
          className={
            links === 1 || window.location.pathname === "/dashboard/tasks"
              ? "is-active"
              : null
          }
        >
          <p id="nav">Tasks</p>
          {/* <i id="icon" className="fa fa-bookmark" aria-hidden="true"></i> */}
        </NavLink>
        <NavLink
          to="/dashboard/requests"
          onClick={() => setLinks(2)}
          className={
            links === 2 || window.location.pathname === "/dashboard/request"
              ? "is-active"
              : null
          }
        >
          <p id="nav">Request</p>
          {/* <i id="icon" className="fa fa-envelope" aria-hidden="true"></i> */}
        </NavLink>
        <NavLink
          onClick={() => setLinks(3)}
          className={
            links === 3 || window.location.pathname === "/dashboard/settings"
              ? "is-active"
              : null
          }
          to="/dashboard/settings"
        >
          <p id="nav">Settings </p>
          {/* <i id="icon" className="fa fa-cog" aria-hidden="true"></i> */}
        </NavLink>
        <a href="/" onClick={logout}>
          <p id="nav">Logout</p>
          {/* <i id="icon" className="fa fa-sign-out" aria-hidden="true"></i> */}
        </a>
      </div>
    </>
  );
};

export default Sidebar;
