import React from 'react';
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

const Auth = () => {
    
    return ( <div id="wrap-auth">
            <div className="box on" id="form-sig">
                <h2>Login</h2>
                <form action="/auth" method="POST">
                    <div className="inputBox">
                        <input type="text" name="username" required="" autoComplete={"off"} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="submit" name="" value="Submit" />
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
                        <input type="text" name="username" required="" autoComplete={"off"} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="username" required="" autoComplete={"off"} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password-again" required="" />
                        <label htmlFor="password-again">Password again</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="submit" name="" value="Submit" />
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

export default Auth;