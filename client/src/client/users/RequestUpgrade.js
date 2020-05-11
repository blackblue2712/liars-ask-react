import React from "react";
import { isAuthenticated } from '../../controllers/userController';
import { postRequestUpgrade } from '../../controllers/requestUpgrade';
import Notify from '../components/Notify';

class RequestUpgrade extends React.Component {

    constructor() {
        super();
        this.state = {
            message: ""
        }
        
        this.formData = new FormData();
    }

    previewPhoto = (event) => {
        let reader = new FileReader();
        let inputAvatar = document.getElementById('preview-img');
        reader.onload = function () {
            inputAvatar.src = reader.result;
        }
        try {
            reader.readAsDataURL(event.target.files[0]);
            this.formData.append("photo", event.target.files[0]);
        } catch(e) {
            // do nothing
        }
    }

    handleSendRequest = () => {
        window.event.preventDefault();
        let email = document.getElementById("email").value;
        let description = document.getElementById("description").value;


        // handle here
        this.formData.append("email", email);
        this.formData.append("description", description);
        this.formData.append("_id", isAuthenticated().user._id);
        try {
            postRequestUpgrade(this.formData, isAuthenticated().token)
            .then( res => {
                this.setState({message: res.message})
            })
        } catch (e) {
            console.log(e);
        }
        // if(email.match(/student/g) !== null) {
           
            
        // } else {
        //     alert("Please use your school email");
        // }
    }

    clearMess = () => {
        this.setState( {message: ""} );
    }

    render() {
        const { message } = this.state;
        return (
            <div id="content">
                <div class="main-head">
                    <div class="grid d-flex align-items-centers mb16">
                        <h1 class="fs-headline1 mr-auto">Upgrade to special account</h1>
                    </div>
                </div>
                <div id="mainbar" className="w-100">
                    <Notify />
                    {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />}
                    <div id="announ-form">
                        <div className="bg-white bar-sm bs-md p16">
                            <form id="send-request-from">
                                <div className="post-title ps-relative mb16">
                                    <label htmlFor="email" className="s-label mb4">
                                        Email
                                        <p className="s-desscription mt4">What email address do you use for school? </p>
                                    </label>
                                </div>
                                <div className="ps-relative mb16">
                                    <input required={true} id="email" name="email" type="email" className="s-input w-100" placeholder="john@student.ctu.edu.vn"/>
                                </div>

                                <div className="post-title ps-relative mb16">
                                    <label htmlFor="photo" className="s-label mb4">
                                        Photo
                                        <p className="s-desscription mt4">
                                            We need a litle more information. Please upload proof of your academic status.
                                        </p>
                                    </label>
                                    <input type="file" name="photo" id="photo" className="d-none" onChange={this.previewPhoto} />
                                    <div className="js-camera-prompt mt16">
                                        <button
                                            style={{padding: "4px 8px", opacity: ".7"}}
                                            onClick={ () => {window.event.preventDefault(); document.getElementById("photo").click()} }
                                        >
                                            <h4>Use your camera to take a picture.</h4>
                                            <svg fill="#959da5" class="octicon octicon-device-camera" viewBox="0 0 16 16" width="100" height="100" version="1.1" aria-hidden="true"><path d="M15 3H7c0-0.55-0.45-1-1-1H2c-0.55 0-1 0.45-1 1-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1zM6 5H2v-1h4v1z m4.5 7c-1.94 0-3.5-1.56-3.5-3.5s1.56-3.5 3.5-3.5 3.5 1.56 3.5 3.5-1.56 3.5-3.5 3.5z m2.5-3.5c0 1.38-1.13 2.5-2.5 2.5s-2.5-1.13-2.5-2.5 1.13-2.5 2.5-2.5 2.5 1.13 2.5 2.5z"></path></svg>
                                        </button>
                                        <div className="preview-area" style={{float: "right"}}>
                                            <img id="preview-img" style={{maxWidth: "250px"}} src="" alt=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-title ps-relative mb16">
                                    <label htmlFor="description" className="s-label mb4">
                                        Descrition
                                    </label>
                                </div>
                                <div className="ps-relative mb16">
                                    <textarea id="description" name="description" type="text" className="s-input w-100" cols="30" rows="10"></textarea>
                                </div>

                                
                                <div className="post-title ps-relative mb16">
                                    <div id="wrap-btn-loading" className="ps-relative">
                                        <label className="s-label mb4">
                                            <p className="s-desscription mt4">
                                                Please note, your request cannot be edited once it has been submitted, so please verify your details for accuracy before sending them to us.
                                            </p>
                                        </label>
                                        <button
                                            className="s-btn s-btn__outline s-btn__primary mt24"
                                            onClick={this.handleSendRequest}
                                        >Submit your information</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="clear-fix"></div>  
            </div>
        )
    }
}

export default RequestUpgrade;