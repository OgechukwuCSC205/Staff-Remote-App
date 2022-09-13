import { flexbox } from "@mui/system";
import { useEffect, useState } from "react";
import { getTasks } from "../../../services/utility";
// import TableData from "../../../db.json/tasks";
import "./tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then((res) => res)
      .then((response) => setTasks(response));
  }, []);


  // function approved () {
  //   if (info.approval_status === "Approved") {

  //   }
  // }

  return (
    <div>
      <div >
        <p className="task-text">Tasks</p>
        <hr
          style={{ height: "3px", width: "10px", backgroundColor: "#ff1000" }}
        />
      </div>

      <div className="">
        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search"
          className="form-input4"
        />
        <div className="task-div">
          <p className="task-p">All Tasks</p>
          <p className="task-p pending">Approved</p>
          <p className="task-p pending">Pending</p>
        </div>
      </div>
      <table className="table tables">
        <thead className="thead">
          <tr className="colored-head">
            <th>Name</th>
            <th>Unit</th>
            <th>Email</th>
            <th>Role</th>
            <th>Approval Status</th>
            <th>Date Sent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tasks.map((info, index) => (
            <tr key={index}>
              <td>{info.name}</td>
              <td>{info.unit}</td>
              <td>{info.email}</td>
              <td className="colored">{info.role}</td>
              <td>{info.approval_status}</td>
              <td>{info.date}</td>
              <td>
                <i class="fa fa-eye table-icon" aria-hidden="true"></i>
                <i
                  class="fa fa-check table-icon icon-style"
                  aria-hidden="true"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
