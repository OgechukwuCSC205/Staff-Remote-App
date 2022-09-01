import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "./Registration.css";
import RegForm from "../../Assets/Reg_Image.svg";
import WemaForm from "../../Assets/Wema.svg";

const Registration = () => {
  // const [department, setDepartment] = useState("");

  const dept = [
    "Finance and Accounting",
    "Information Technology",
    "Human Resources",
    "Customer Service",
    "Hardware Technology",
  ];

  //import WemaForm from "../../Assets/Wema.svg";
  //

  const roles = ["Line Manager", "Team Lead", "Team Member"];

  const [department, setDepartment] = useState("Finance and Accounting");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Line Manager");
  const [error, setError] = useState({
    departmant: false,
    email: false,
    password: false,
    role: false,
  });

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleSubmit1 = (params) => {
    params.preventDefault();

    if (password === "") {
      setError({ ...error, password: true });
      return;
    }

    if (email === "" || String(email).toLowerCase().match(re)) {
      setError({ ...error, email: true });
      return;
    }
  };

  return (
    <section className="reg-wrapper">
      <img className="img-form1" alt="" src={RegForm} />

      <div className="move">
        <form className="centralize-form">
          <div>
            <div>
              <div>
                <p className="register-text">Register your Account</p>
                <p className="second-text">
                  Fill the details below to register account
                </p>
              </div>
              <label htmlFor="department" className="form-label1 mt-4">
                Department
              </label>

              <select
                name="department"
                id="dept"
                className="form-input1"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                {dept.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>

              <label htmlFor="email" className="form-label1 mt-4">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                maxLength={30}
                className="form-input1"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label htmlFor="password" className="form-label1 mt-4">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                // required
                maxLength={20}
                className="form-input1"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {error.password && <p>Enter a valid password</p>}

              <label htmlFor="roles" className="form-label1 mt-4">
                Roles
              </label>

              <select
                name="roles"
                id="roles"
                className="form-input1"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                {roles.map((value, index) => (
                  <option key={index}>{value}</option>
                ))}
              </select>

              <div>
                <Button
                  type="submit"
                  size="sm"
                  className="btn1-primary mb-1"
                  onClick={handleSubmit1}
                >
                  Submit
                </Button>
              </div>

              <div>
                <p className="mb-3 center">
                  Already have an account?{" "}
                  <a href="./" className="signIn-link">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="img3-form">
        <img alt="" src={WemaForm} />
      </div>
    </section>
  );
};

export default Registration;
