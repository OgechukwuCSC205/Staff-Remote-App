import { Route, Routes } from "react-router-dom";
//import Registration from "./components/Registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Log" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
