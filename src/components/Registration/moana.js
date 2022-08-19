import React from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "./Registration.css";
import RegForm from "../../Assets/Reg_Image.svg";

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

      <div className="">
        <p className="register-text">Register your Account</p>
        <p className="second-text">
          {" "}
          Fill the details below to register account{" "}
        </p>
        <form className="central-form">
          <div>
            <div>
            <label htmlFor="department" className="form-label1">Department</label>
            
            <select name="department" id="dept">
              {dept.map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select>           
            
          
          <label htmlFor="email" className="form-label1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                maxLength={20}
                className="form-input"
              />
          
          <label htmlFor="password" className="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                required
                maxLength={16}
                className="form-input"
              />


         <label htmlFor="roles" className="form-label1">Roles</label>
            
            <select name="roles" id="dept">
              {roles.map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </select> 

          <div>
                <Button type="submit" size="sm" className=" mb-3">
                  Submit
                </Button>
              </div>

          <div>
            <p className="mb-3 what mt-2 help">
              Already have an account? <a href="./Log" className="signIn-link">Sign in</a>
            </p>
          </div>
          </div>
          </div>
        </form>
      </div>

      {/* <div className="w-100">
        <img alt="" src={WemaForm} />
      </div> */}
    </section>
  );
};

export default Registration;
