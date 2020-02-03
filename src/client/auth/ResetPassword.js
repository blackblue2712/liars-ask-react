import React from 'react';
import { resestPassword } from '../../controllers/authController';

class ResetPassword extends React.Component {
    handleSubmitResetPassword = () => {
        window.event.preventDefault();
        let newPwd = document.getElementById("pwd").value;
        console.log(this.props, newPwd);
        let resetCode = this.props.match.params.resetCode;

        resestPassword(resetCode, newPwd)
        .then (res => {
            alert(res.message);
        })
    }

    render() {
        return (
            <div id="wrap-auth">
                <div className="box on" id="form-for">
                    <h2>New password</h2>
                    <form >
                        <div className="inputBox">
                            <input
                                type="password" name="newpwd" required="" id="pwd"
                            />
                            <label htmlFor="pwd">Password</label>
                        </div>
                        <div className="d-flex align-items-center">
                            <div id="wrap-forgot-btn" className="ps-relative">
                                <input
                                    type="submit" name="" value="Submit"
                                    onClick={this.handleSubmitResetPassword}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        )
    }
}

export default ResetPassword;