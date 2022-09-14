import { Route, Routes } from "react-router-dom";
//import Registration from "./components/Registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path = "" element = {<Home/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
