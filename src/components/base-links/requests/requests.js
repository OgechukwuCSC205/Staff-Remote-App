import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./requests.css";
// import Select from "react-select";

const Request = () => {
  // const [department, setDepartment] = useState("");

  const days = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
  ];

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

  function handleSelect(data) {
    setOday(data);
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
    <section className="req-wrapper">
      <div className="">
        <form className="centralize-form-req">
          <div>
            <div className="main-div">
              <div>
                <p className="req-text">Make Request</p>
              </div>

              <label htmlFor="officeDays" className="form-labels mt-4">
                Days in the Office
              </label>

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

              <label htmlFor="remoteDays" className="form-labels mt-4">
                Days working from home
              </label>

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
                maxLength={20}
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
        </form>
      </div>
    </section>
  );
};

export default Request;
