import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "chart.js/auto";
// import { Circle } from "react-shapes";
import { Doughnut } from "react-chartjs-2";
import "./Home.css";

export const Home = () => {
    const [value, onChange] = useState(new Date());

  const state = {
    labels: ["From Home", "In The Office"],
    datasets: [
      {
        label: "Staff Attendance",
        data: [12, 19],
        backgroundColor: ["#843477", "#9A7B6C"],
        hoverBackgroundColor: ["#843476", "#9A7B6B"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usepointStyle: true,
          boxWidth: 10,
          padding: 20,
        },
      }
    }
  };

  return (
    <>
      <div className="date">
        <p className="date-text">{new Date().toDateString()}</p>
      </div>
      <div className="wrapper">
        <div className="card-container">
          <Card
            className="card"
            style={{ width: "541px", height: "326px", background: "#FFFFDD" }}
          >
            <Card.Body>
              {/* <Card.Title>Today you're working:</Card.Title>
              <Card.Subtitle>From Home</Card.Subtitle> */}
              <Card.Text>
                <p className="card-text">Today you're working:</p>
                <span className="card-desc">From Home</span>
              </Card.Text>
            </Card.Body>
            <div className="doughnut">
              <Doughnut data={state} options={options} />
            </div>
            <div className="circle-container">
              <div className="illustration">
                <Circle
                  r={12}
                  fill={{ color: "#843477" }}
                  // stroke={{ color: "#E65243" }}
                  // strokeWidth={3}
                />
                <span className="from-home">From Home</span>
              </div>
              <br />
              <div className="illustration">
                <Circle r={12} fill={{ color: "#9A7B6C" }} />
                <span className="the-office">In The Office</span>
              </div>
            </div>
          </Card>
          <br />
          <div className="link__view-history">
            <a className="link__view-history" href="/">
              View History
            </a>
          </div>
          <div className="details">
            <p>
              Line Manager: <span>Jerry Okoro</span>
            </p>
            <p>
              Team Leader: <span>Nancy Ogunbanjo</span>
            </p>
          </div>
        </div>
        <div className="calender-container">
          {/* <p>Calender</p> */}
          <Calendar onChange={onChange} value={value} className="react-calender" />
          <br />
          <div className="circle-container">
            <div className="illustration">
              <Circle
                r={12}
                fill={{ color: "#843477" }}
                // stroke={{ color: "#E65243" }}
                // strokeWidth={3}
              />
              <span className="from-home">From Home</span>
            </div>
            <br />
            <div className="illustration">
              <Circle r={12} fill={{ color: "#9A7B6C" }} />
              <span className="the-office">In The Office</span>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
