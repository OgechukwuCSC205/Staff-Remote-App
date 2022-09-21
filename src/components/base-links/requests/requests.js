import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./requests.css";
// import Select from "react-select";

const Request = () => {
  // const [department, setDepartment] = useState("");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // const officeDays = [
  //   { value: "monday", label: "Monday" },
  //   { value: "tuesday", label: "Tuesday" },
  //   { value: "wednesday", label: "Wednesday" },
  //   { value: "thursday", label: "Thursday" },
  //   { value: "friday", label: "Friday" },
  // ];

  const [rDay, setRday] = useState();
  const [oDay, setOday] = useState();
  const [error, setError] = useState({
    rDay: false,
    oDay: false,
  });

  function checkFunction() {
    // document.getElementById("accept").checked = true;
  }

  function handleSelect1(data) {
    setRday(data);
  }

  function handleSubmit11(params) {
    params.preventDefault();

    if (rDay === "") {
      setError({ ...error, rDay: true });
      return;
    }

    if (oDay === "") {
      setError({ ...error, oDay: true });
      return;
    }
  }

  return (
    <div className="">
      <div className="centralize-form-req">
        <div>
          <div className="main-div">
            <p className="req-text">
              <span className="underline-style">Make Request</span>
              {/* Make Request */}
            </p>
            {/* <hr /> */}

            <div className="mb-5">
              <label htmlFor="officeDays" className="form-labels mt-4 mb-1">
                Days in the Office
              </label>
              {/* //map through here when you understand algorthm */}
              {days.map((value, index) => (
                <span
                  className="checkbox-style checkbox-style-left"
                  onClick={checkFunction}
                >
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    value="yes"
                    id="accept"
                    onClick={checkFunction}
                  />
                  {value}
                </span>
              ))}
            </div>

            {/* <Select
                options={days}
                placeholder="Select Day"
                value={oDay}
                className="form-inputs"
                onChange={handleSelect}
                isMulti
              /> */}
            {/* {officeDays.map((value, index) => (
                  <option key={index}>{value}</option>
                ))} */}
            <div className="mb-5">
              <label htmlFor="remoteDays" className="form-labels mt-4 mb-1">
                Days working from home
              </label>

              {days.map((value, index) => (
                <span
                  className="checkbox-style checkbox-style-left"
                  onClick={checkFunction}
                >
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    value="yes"
                    id="accept"
                    onClick={checkFunction}
                  />
                  {value}
                </span>
              ))}
            </div>

            {/* <Select
                options={days}
                placeholder="Select Day"
                value={rDay}
                className="form-inputs"
                onChange={handleSelect1}
                isMulti
              /> */}

            <label htmlFor="text" className="form-labels mt-4">
              Request Note
            </label>
            <textarea
              type="text"
              placeholder="Write request"
              // required
              maxLength={1000}
              className="form-inputs1 form-height"
            />

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
      </div>
    </div>
  );
};

export default Request;
