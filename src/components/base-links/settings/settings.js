import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./settings.css";
// import Select from "react-select";

const Settings = () => {
  const depts = [
    { value: "human resources", label: "Human Resources" },
    { value: "finance", label: "Finance" },
    { value: "corporate strategy", label: "Corporate Strategy" },
    { value: "information technology", label: "Information Technology" },
  ];

  const units = [
    { value: "human resources", label: "Human Resources" },
    { value: "finance", label: "Finance" },
    { value: "corporate strategy", label: "Corporate Strategy" },
    { value: "information technology", label: "Information Technology" },
  ];

  // const officeDays = [
  //   { value: "monday", label: "Monday" },
  //   { value: "tuesday", label: "Tuesday" },
  //   { value: "wednesday", label: "Wednesday" },
  //   { value: "thursday", label: "Thursday" },
  //   { value: "friday", label: "Friday" },
  // ];

  const [fDept, setFdept] = useState();
  const [nDept, setNdept] = useState();
  const [nUnit, setNunit] = useState();
  const [error, setError] = useState({
    fDept: false,
    nDept: false,
    nUnit: false,
  });

   const dept = [
     "Finance and Accounting",
     "Information Technology",
     "Human Resources",
     "Customer Service",
     "Hardware Technology",
   ];

   const [department, setDepartment] = useState("Finance and Accounting");

  function handleSelect(data) {
    setFdept(data);
  }

  function handleSelect1(data) {
    setNdept(data);
  }

  function handleSelect2(data) {
    setNunit(data);
  }

  function handleSubmit11(params) {
    params.preventDefault();

    if (fDept === "") {
      setError({ ...error, fDept: true });
      return;
    }

    if (nDept === "") {
      setError({ ...error, nDept: true });
      return;
    }

    if (nUnit === "") {
      setError({ ...error, nUnit: true });
      return;
    }
  }

  return (
    <div className="">
      <form className="centralize-form-set">
        <div>
          <div className="main-div-set">
            <div>
              <p className="set-text">
                <span className="underline-style-settings">
                  Change Department{" "}
                </span>
              </p>
            </div>

            <label htmlFor="text" className="form-labels mt-4">
              Full Name
            </label>
            <input
              type="text"
              placeholder="  Full Name"
              // required
              maxLength={20}
              className="form-inputs form-height1"
            />

            <label htmlFor="officeDays" className="form-labels mt-4">
              Current Department
            </label>

            <select
              name="department"
              id="dept"
              className="form-inputs form-height1"
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

            {/* <Select
              options={depts}
              placeholder="Select Department"
              value={fDept}
              className="form-inputs"
              onChange={handleSelect}
              isMulti
            /> */}
            {/* {officeDays.map((value, index) => (
                  <option key={index}>{value}</option>
                ))} */}

            <label htmlFor="remoteDays" className="form-labels mt-4">
              New Department
            </label>

            <select
              name="department"
              id="dept"
              className="form-inputs form-height1"
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

            {/* <Select
              options={depts}
              placeholder="Select Department"
              value={nDept}
              className="form-inputs"
              onChange={handleSelect1}
              isMulti
            /> */}

            <label htmlFor="remoteDays" className="form-labels mt-4">
              Unit
            </label>

            <select
              name="department"
              id="dept"
              className="form-inputs form-height1"
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

            {/* <Select
              options={units}
              placeholder="Select Unit"
              value={nUnit}
              className="form-inputs"
              onChange={handleSelect2}
              isMulti
            /> */}

            <div className="">
              <button
                type="submit"
                // size="sm"
                className="set-btn"
                onClick={handleSubmit11}
              >
                Submit
              </button>
              {(error.rDay || error.oDay) && (
                <p className="validity">Enter a valid password</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
