import { useEffect, useState } from "react";
import { getTasks } from "../../../services/utility";
// import TableData from "../../../db.json/tasks";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {(
      getTasks()
        .then((res) => res)
        .then((response) => setTasks(response))
  )}, []);

  return (
    <div>
      <table className="table tables">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Approval Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((info, index) => (
            <tr key={index}>
              <td>{info.name}</td>
              <td>{info.role}</td>
              <td>{info.approval}</td>
              <td>{index}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
