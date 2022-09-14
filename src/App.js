import { Route, Routes } from "react-router-dom";
//import Registration from "./components/Registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/dashboard";
import Tasks from "./components/base-links/tasks/tasks.js";
import Request from "./components/base-links/requests/requests";
import Settings from "./components/base-links/settings/settings";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
          <Route path="/dashboard/requests" element={<Request />} />
          <Route path="/dashboard/settings" element={<Settings />} />{" "}
        </Route>

        {/* <Route path="/dashboard/request" element={<Tasks />} /> */}
      </Routes>
    </>
  );
};

export default App;
