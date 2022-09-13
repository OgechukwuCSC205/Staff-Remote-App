import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const [links, setLinks] = useState(0);

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
          className={links === 0 ? "is-active" : null}
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
          className={links === 1 ? "is-active" : null}
        >
          Tasks
        </NavLink>
        <NavLink
          to="/dashboard/requests"
          onClick={() => setLinks(2)}
          className={links === 2 ? "is-active" : null}
        >
          Request
        </NavLink>
        <NavLink
          onClick={() => setLinks(3)}
          className={links === 3 ? "is-active" : null}
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
