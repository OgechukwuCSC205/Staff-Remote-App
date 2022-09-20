import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const [links, setLinks] = useState();

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  console.log(window.location)

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

  return (
    <>
      <div className="sidenav">
        <i className="fa fa-bars iconic icon3" aria-hidden="true"></i>
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
          Home
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
          Tasks
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
          Request
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
