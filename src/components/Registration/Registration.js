import React from "react";
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

  return (
    <section className="reg-wrapper">
      <img className="img-form1" alt="" src={RegForm} lazy />

      <div className="move">
        <p className="register-text">Register your Account</p>
        <p className="second-text">
          Fill the details below to register account
        </p>
        <form className="central-form">
          <div>
            <div>
              <label htmlFor="department" className="form-label1 mt-4">
                Department
              </label>

              <select name="department" id="dept" className="form-input1">
                {dept.map((value, index) => (
                  <option key={index}>{value}</option>
                ))}
              </select>

              <label htmlFor="email" className="form-label1 mt-4">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                maxLength={20}
                className="form-input1"
              />

              <label htmlFor="password" className="form-label1 mt-4">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                required
                maxLength={16}
                className="form-input1"
              />

              <label htmlFor="roles" className="form-label1 mt-4">
                Roles
              </label>

              <select name="roles" id="dept" className="form-input1">
                {roles.map((value, index) => (
                  <option key={index}>{value}</option>
                ))}
              </select>

              <div>
                <Button type="submit" size="sm" className="btn1-primary mb-1">
                  Submit
                </Button>
              </div>

              <div>
                <p className="mb-3 center">
                  Already have an account?{" "}
                  <a href="./Log" className="signIn-link">
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
