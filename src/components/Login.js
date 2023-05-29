import React from "react";
import { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";

export function Login() {
    const [passShow, setPassShow] = useState(false);
    const [inpval, setInpval] = useState({
        email: "",
        password: "",

    });

    console.log(inpval);

    const setVal = (e) => {
        //console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const loginUser = (e) => {
        const { name, value } = e.target;

        const { fname, email, password, cpassword } = inpval;

        if (email === "") {
            alert("please enter email");
        } else if (!email.includes("@")) {
            alert("please enter valid email")
        } else if (password === "") {
            alert("please enter password")
        } else if (password.length < 6) {
            alert("paswword lenght must be more than 8 chars")
        } else {
            console.log("user registration successfully");
            alert("login successfully");
        }
    };


    return (

        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome back , Login</h1>
                        <p>Fill the credentials</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={setVal} value={inpval.email} id="email" placeholder="enter emailid" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} name="password" onChange={setVal} value={inpval.password} id="password" placeholder="enter password" />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button onClick={loginUser} className="btn">Login</button>
                        <p>dont have an account? <NavLink to="/register" >sign up</NavLink> </p>
                    </form>
                </div>
            </section>
        </>
    )
}