import { useEffect, useState } from "react";
import { getTasks } from "../../../services/utility";
// import TableData from "../../../db.json/tasks";
import "./tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    getTasks()
      .then((res) => res)
      .then((response) => setTasks(response));
  }, []);

  const taskSelect = ["All Tasks", "Approved", "Pending"];

  // function approved () {
  //   if (info.approval_status === "Approved") {

  //   }
  // }

  return (
    <div>
      <div className="task-text">Tasks</div>
      <div className="task-search">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            id="search-bar"
            placeholder="Search"
            className="form-input4"
          />
          <button className="icon">
          <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="task-div">
          <select
            name="task"
            id="task"
            className="task-select"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            {taskSelect.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
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
