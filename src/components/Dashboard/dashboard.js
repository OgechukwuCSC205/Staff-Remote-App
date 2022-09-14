import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../base/Header/Header";
import Sidebar from "../base/Sidebar/Sidebar";
// import Form from "react-bootstrap/Form";
import "./dashboard.css";

const Dashboard = () => {  return (
    <div>
      <Sidebar />

      <div id="rightSideWrapper">

        {/* <header>Header</header> */}
        <Header />

        <Sidebar />
        <div className="ContentBox">
          <main>
            <Outlet>
            </Outlet>
          </main>
        </div>
      </div>
    </div>


  );
};

export default Dashboard;
