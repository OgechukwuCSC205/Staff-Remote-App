import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTasks } from "../../services/utility";
import Tasks from "../base-links/tasks/tasks";

export const Update = () => {
  const [tasks, setTasks] = useState([]);
  const [viewTasks, setViewTasks] = useState({});
  let myUrl = window.location.href;
  const splitId = myUrl.split("/");
  let id = splitId[splitId.length - 1];

  useEffect(() => {
    getTasks()
      .then((res) => res)
      .then((response) => {
        setTasks(response);

        const [task] = response.filter((x, index) => index === Number(id));
        setViewTasks(task);
      });
  }, []);
  console.log(viewTasks);
  console.log(id);

  function closeRequest() {
    // document.getElementById("myTable").style.display = "inline-table";
    // document.getElementById("myForm").style.display = "none";
    // return num;
    <Route path="/dashboard/tasks" element={<Tasks />} />;
  }

  return (
    <>
            <div className="request-popup" id="myForm">
              <form className="form-container">
                <h3>Request from {viewTasks.name}</h3>
                <>{viewTasks.request}</>
              </form>
              <button className="return-btn" onClick={closeRequest}>
                Back
              </button>
            </div>
    </>
  );
};
