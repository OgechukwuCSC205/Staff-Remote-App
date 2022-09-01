import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
// import Form from "react-bootstrap/Form";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section>
      <ul className="list">
          <li className="links">
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="links">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className="links">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="links further-down">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
    </section>
  );
};

export default Dashboard;
