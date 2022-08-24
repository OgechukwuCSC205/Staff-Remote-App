import { Route, Routes } from "react-router-dom";
//import Registration from "./components/Registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
