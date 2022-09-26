import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Header from "../base/Header/Header";
import Sidebar from "../base/Sidebar/Sidebar";
// import Form from "react-bootstrap/Form";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    debugger;
  },[]);
  
  console.log(JSON.parse(sessionStorage.getItem("user")));
  if (JSON.parse(sessionStorage.getItem("user")) == null) {
    navigate("/");
  }
  return (
    <div>
      <Sidebar />

      <div id="rightSideWrapper">
        {/* <header>Header</header> */}
        <Header />

        <Sidebar />
        <div className="ContentBox">
          <main>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
