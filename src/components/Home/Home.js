import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const Home = () => {
    const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="date">
        <p className="date-text">{new Date().toDateString()}</p>
      </div>
      <div className="wrapper">
        <div className="card-container">
          <Card className="card">
            <Card.Body>
              <Card.Title>Today you're working:</Card.Title>
              <Card.Subtitle>From Home</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
              <div className="calender-container">
                  <h1>Calender</h1>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};
