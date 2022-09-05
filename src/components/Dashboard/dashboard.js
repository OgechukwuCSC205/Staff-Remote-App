import React, { useState } from "react";
import {Link, Outlet} from "react-router-dom";
import Header from "../base/Header/Header";
import Sidebar from "../base/Sidebar/Sidebar";
// import Form from "react-bootstrap/Form";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section>
      <Header />
      <Sidebar   />
       <Outlet>
        {/* <Link to="/dashboard/tasks">Tasks</Link> */}

      </Outlet>  


    </section>
  );
};

export default Dashboard;
