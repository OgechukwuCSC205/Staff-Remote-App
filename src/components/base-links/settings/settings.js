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

const [fDept, setFdept] = useState(); //rename properly
const [nDept, setNdept] = useState();
const [nUnit, setNunit] = useState();
const [error, setError] = useState({
  fDept: false,
  nDept: false,
  nUnit: false,
});

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
  <section className="set-wrapper">
    <div className="">
      <form className="centralize-form-set">
        <div>
          <div className="main-div-set">
            <div>
              <p className="set-text">Change Department</p>
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

            {/* <Select
              options={units}
              placeholder="Select Unit"
              value={nUnit}
              className="form-inputs"
              onChange={handleSelect2}
              isMulti
            /> */}

            <div className="">
              <Button
                type="submit"
                // size="sm"
                className="req-btn"
                onClick={handleSubmit11}
              >
                Submit
              </Button>
              {(error.rDay || error.oDay) && (
                <p className="validity">Enter a valid password</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
);};

export default Settings;
