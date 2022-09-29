import { Route } from "react-router-dom";
import {useState, useEffect} from "react";
import { getTasks } from "../../services/utility";
import Tasks from "../base-links/tasks/tasks";

export const Update = () => {
      const [tasks, setTasks] = useState([]);

      useEffect(() => {
        getTasks()
          .then((res) => res)
          .then((response) => setTasks(response));
      }, []);


      function closeRequest() {
        // document.getElementById("myTable").style.display = "inline-table";
        // document.getElementById("myForm").style.display = "none";
        // return num;
        <Route path="/dashboard/tasks" element={<Tasks />} />;
      }

  return (
    <>
      {tasks.map((info, myIndex) => (
        <div className="request-popup" id="myForm">
          <form className="form-container">
            <h3 key={myIndex}>Request from {info.name}</h3>
            <>{info.request}</>
          </form>
          <button className="return-btn" onClick={closeRequest}>
            Back
          </button>
        </div>
      ))}
    </>
  );
};
