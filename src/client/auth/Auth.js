import React, { useState } from 'react';
import { postSignup, postSignin, authenticate, isAuthenticated } from '../../controllers/userController';
import { withRouter } from 'react-router-dom';
import './style.css';

window.onload = () => {
    const inputRequireDom = Array.from(document.getElementsByTagName("input"));
    inputRequireDom.slice(0, inputRequireDom.length - 1).map( ip => {
        return ip.required = true;
    })
}

const handleChangeUI = (next) => {
    return () => {
        let eres = document.querySelector("#form-reg");
        let esig = document.querySelector("#form-sig");
        if(next === "reg") {
            eres.classList.remove("d-none");
            esig.classList.add("d-none");
        } else {
            esig.classList.remove("d-none");
            eres.classList.add("d-none");
        }
    }
}
    

const Auth = (props) => {
    // Check is autheticated
    if(isAuthenticated()) {
        props.history.push("/");
    }

    const handleSubmit = (email, password) => {
        window.event.preventDefault();
        postSignin( {email, password} )
        .then( res => {
            if(!res.payload) {
                alert(res.message)
            } else {
                authenticate(res.payload, () => {
                    props.history.push("/");
                })
            }
        })
    }

    const handleRegister = (email, password, passwordAg) => {
        window.event.preventDefault();
        let patt = /\d+/;

        if (password.match(patt) === null || password.length < 6) {
            alert("password have at least 6 characters and must contain 1 number");
        } else if(password !== passwordAg) {
            alert("password and password again do not match!")
        } else {
            postSignup( {email, password} )
            .then( res => {
                if(res && !res.payload) {
                    alert(res.message)
                } else {
                    //
                    handleChangeUI()();
                }
            })
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [r_email, r_setEmail] = useState("");
    const [r_password, r_setPassword] = useState("");
    const [r_passwordAg, r_setPasswordAg] = useState("");

    return ( <div id="wrap-auth">
            <div className="box on" id="form-sig">
                <h2>Login</h2>
                <form action="/auth" method="POST">
                    <div className="inputBox">
                        <input
                            type="text" name="email" required="" 
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password" name="password" required=""
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input
                            type="submit" name="" value="Submit"
                            onClick={ () => handleSubmit(email, password)}
                        />
                        <a
                            className="s-btn s-btn__outline s-btn__hovero bd-none ml-auto"
                            style={{
                                position: "relative",
                                zIndex: "9999",
                                color: "blue"
                            }}
                            onClick={handleChangeUI("reg")}
                            href="#c"
                        >Register a new accoun</a>
                    </div>
                </form>
            </div>
            <div className="box d-none on" id="form-reg">
                <h2>Register</h2>
                <form action="/auth" method="POST">
                    <div className="inputBox">
                        <input
                            type="email" name="email" required="" autoComplete={"off"}
                            onChange={ (e) => r_setEmail(e.target.value) }
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password" name="password" required=""
                            onChange={ (e) => r_setPassword(e.target.value) }
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password" name="password-again" required=""
                            onChange={ (e) => r_setPasswordAg(e.target.value) }
                        />
                        <label htmlFor="password-again">Password again</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input
                            type="submit" name="" value="Submit"
                            onClick={() => handleRegister(r_email, r_password, r_passwordAg)}
                        />
                        <a
                            className="s-btn s-btn__outline s-btn__hovero bd-none ml-auto"
                            style={{
                                position: "relative",
                                zIndex: "9999",
                                color: "blue"
                            }}
                            onClick={handleChangeUI("sig")}
                            href="#c"
                        >Login</a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default withRouter(Auth);