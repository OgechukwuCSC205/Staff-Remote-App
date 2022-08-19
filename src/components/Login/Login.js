import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import LogForm from "../../Assets/loginImg1.svg";
import "./Login.css";
import WemaForm from "../../Assets/Wema.svg"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // const data = useState("");
  // const email = data[0];
  // const setEmail = data[1];
  return (
    <section className="wrapper">
      <img alt="" className="img-form" src={LogForm} lazy />
      {/* <LogForm /> */}

      <div className="move1">
        <p className="welcome-text">Welcome</p>
        <p className="second-paragraph">Login to Continue</p>
        <form className="centralize-form">
          <div>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                maxLength={20}
                className="form-input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="form-check mt-5 mb-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={checkbox}
                  id="flexCheckDefault"
                  onClick = {(e) => {setCheckbox(e.target.checked); console.log(checkbox)}}
                />
                <label
                  className="form-check-label labelise"
                  // for="flexCheckDefault"
                >
                  Remember me
                </label>
              </div>

              <div>
                <Button type="submit" size="sm" className="btn-primary mb-3">
                  Login
                </Button>
              </div>

              <div>
                <p className="mb-4  center">
                  Don't have an account?{" "}
                  <a href="./" className="sign-link">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="img2-form">
        <img alt="" src={WemaForm} lazy />
      </div>
    </section>
  );
};

export default Login;
