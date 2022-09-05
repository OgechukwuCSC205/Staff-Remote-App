// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// import "./request.css";


// const Request = () => {
//   // const [department, setDepartment] = useState("");

//   const remoteDays = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//   ];

//     const officeDays = [
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//     ];


//   const [rDay, setRday] = useState("Monday");
//   const [oDay, setOday] = useState("Monday");
//   const [error, setError] = useState({
//     departmant: false,
//     email: false,
//     password: false,
//     role: false,
//   });

//   const re =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


//   return (
//     <section className="req-wrapper">

//       <div className="">
//         <form className="centralize-form">
//           <div>
//             <div>
//               <div>
//                 <p className="register-text">Register your Account</p>
//                 <p className="second-text">
//                   Fill the details below to register account
//                 </p>
//               </div>
//               <label htmlFor="department" className="form-label1 mt-4">
//                 Department
//               </label>

//               <select
//                 name="department"
//                 id="dept"
//                 className="form-input1"
//                 value={department}
//                 onChange={(e) => {
//                   setDepartment(e.target.value);
//                 }}
//               >
//                 {dept.map((value, index) => (
//                   <option key={index} value={value}>
//                     {value}
//                   </option>
//                 ))}
//               </select>

//               <label htmlFor="email" className="form-label1 mt-4">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 required
//                 maxLength={30}
//                 className="form-input1"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />

//               <label htmlFor="password" className="form-label1 mt-4">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 // required
//                 maxLength={20}
//                 className="form-input1"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />

//               {error.password && <p>Enter a valid password</p>}

//               <label htmlFor="roles" className="form-label1 mt-4">
//                 Roles
//               </label>

//               <select
//                 name="roles"
//                 id="roles"
//                 className="form-input1"
//                 value={role}
//                 onChange={(e) => {
//                   setRole(e.target.value);
//                 }}
//               >
//                 {roles.map((value, index) => (
//                   <option key={index}>{value}</option>
//                 ))}
//               </select>

//               <div>
//                 <Button
//                   type="submit"
//                   size="sm"
//                   className="btn1-primary mb-1"
//                   onClick={handleSubmit1}
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="img3-form">
//         <img alt="" src={WemaForm} />
//       </div>
//     </section>
//   );
// };

// export default Request;
