import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./mix.css";
// export function Register() {
//     const [passShow, setPassShow] = useState(false);
//     const [cpassShow, setCPassShow] = useState(false);

//     const [inpval, setInpval] = useState({
//         fname: "",
//         email: "",
//         password: "",
//         cpassword: "",
//     });

//     console.log(inpval);

//     const setVal = (e) => {
//         //console.log(e.target.value);
//         const { name, value } = e.target;

//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })
//     }

//     const addUserData = async (e) => {
//         e.preventDefault();

//         const { fname, email, password, cpassword } = inpval;

//         if (fname === "") {
//             alert("please enter your name")
//         } else if (email === "") {
//             alert("please enter email");
//         } else if (!email.includes("@")) {
//             alert("please enter valid email")
//         } else if (password === "") {
//             alert("please enter password")
//         } else if (password.length < 6) {
//             alert("paswword lenght must be more than 8 chars")
//         } else if (cpassword === "") {
//             alert("please enter password")
//         } else if (cpassword.length < 6) {
//             alert("paswword lenght must be more than 8 chars")

//         } else if (password !== cpassword) {
//             alert("pasword is not same")
//         } else {
//             // console.log("user registration successfully");
//             // alert("user registered successfully");

//             const data = await fetch("http://localhost:8000/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     fname, email, password, cpassword
//                 })
//             });
//             const res = await data.json();
//             console.log(res.status);

//             if (res.status == 201) {
//                 alert("user registration done");
//                 setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "", })
//             }


//         }
//     }
//     return (
//         <div>
//             <section>
//                 <div className="form_data">
//                     <div className="form_heading">
//                         <h1>Sign Up</h1>
//                         <p>Enter the credentials</p>
//                     </div>

//                     <form>
//                         <div className="form_input">
//                             <label htmlFor="fname">Name</label>
//                             <input type="text" name="fname" onChange={setVal} value={inpval.fname} id="fname" placeholder="enter your name" />
//                         </div>
//                         <div className="form_input">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email" onChange={setVal} value={inpval.email} id="email" placeholder="enter emailid" />
//                         </div>
//                         <div className="form_input">
//                             <label htmlFor="email">Password</label>
//                             <div className="two">
//                                 <input type={!passShow ? "password" : "text"} name="password" onChange={setVal} value={inpval.password} id="password" placeholder="enter password" />
//                                 <div className="showpass" onClick={() => setPassShow(!passShow)}>
//                                     {!passShow ? "show" : "Hide"}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form_input">
//                             <label htmlFor="email">Confirm Password</label>
//                             <div className="two">
//                                 <input type={!cpassShow ? "password" : "text"} name="cpassword" onChange={setVal} value={inpval.cpassword} id="cpassword" placeholder="re-enter password" />
//                                 <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
//                                     {!cpassShow ? "show" : "Hide"}
//                                 </div>
//                             </div>
//                         </div>
//                         <button onClick={addUserData} className="btn">Sign Up</button>
//                         <p>Already have an account?<NavLink to="/" >login</NavLink></p>
//                     </form>
//                 </div>
//             </section>
//         </div>

//     )
// }