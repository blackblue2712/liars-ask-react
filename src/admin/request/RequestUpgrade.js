import React, { Component } from 'react';
import { isAuthenticated } from '../../controllers/userController';
import {
    getRequestUpgradeToSpecialAccount,
    postAcceptRequestUpgradeToSpecialAccount,
    postRejectRequestUpgradeToSpecialAccount
} from '../../controllers/requestUpgrade';

import { Link } from 'react-router-dom';
import Notify from '../components/Notify';

class RequestUpgrade extends Component {
    constructor () {
        super();
        this.state = {
            request: [],
            message: "",
        }
    }

    clearMess = () => {
        this.setState( {message: ""} );
    }

    componentDidMount () {
        getRequestUpgradeToSpecialAccount(isAuthenticated().token)
        .then( list => {
            this.setState({request: list})
        })
        .catch(err => console.log(err))
    }


    handleAcceptRequest = (rid, reciever, orderBt) => {
        let confirm = window.confirm("Are you sure to accpet this request?");
        if(confirm) {
            try {
                let wrapBt = document.querySelector(`td[data-number="${orderBt}"]`);
                if(typeof wrapBt !== undefined) {
                    wrapBt.classList.add("loading-request");
                    wrapBt.firstElementChild.style.opacity = 0;
                }

                let { photo, _id } = isAuthenticated().user;
                let name = isAuthenticated().user.fullname || isAuthenticated().user.email;
                let token = isAuthenticated().token;

                postAcceptRequestUpgradeToSpecialAccount({owner: _id, photo, name, rid, reciever}, token)
                .then( res => {
                    if(typeof wrapBt !== undefined) {
                        wrapBt.classList.remove("loading-request");
                        wrapBt.firstElementChild.style.opacity = 1;
                        document.querySelector(`td[data-number="${orderBt}"] button.accept-request`).style.stroke = "yellow";
                        document.querySelector(`td[data-number="${orderBt}"] button.reject-request`).style.stroke = "#d2d2d2";
                    }
                    this.setState( {message: res.message} );
                })
            } catch(err) {
                console.log(err);
            }
            
        }
    }

    handleRejectRequest = (rid, reciever, orderBt) => {
        let confirm = window.confirm("Are you sure to reject this request?");
        if(confirm) {
            try {
                let wrapBt = document.querySelector(`td[data-number="${orderBt}"]`);
                if(typeof wrapBt !== undefined) {
                    wrapBt.classList.add("loading-request");
                    wrapBt.firstElementChild.style.opacity = 0;
                }

                let { photo, _id } = isAuthenticated().user;
                let name = isAuthenticated().user.fullname || isAuthenticated().user.email;
                let token = isAuthenticated().token;

                postRejectRequestUpgradeToSpecialAccount({owner: _id, photo, name, rid, reciever}, token)
                .then( res => {
                    if(typeof wrapBt !== undefined) {
                        wrapBt.classList.remove("loading-request");
                        wrapBt.firstElementChild.style.opacity = 1;
                        document.querySelector(`td[data-number="${orderBt}"] button.reject-request`).style.stroke = "red";
                        document.querySelector(`td[data-number="${orderBt}"] button.accept-request`).style.stroke = "#d2d2d2";
                    }
                    this.setState( {message: res.message} );
                })
            } catch (err) {
                console.log(err);
            }
        }
    }

    render() {
        const listReq = this.state.request;
        const { message } = this.state;
        return (
            <>
                <Notify />  
                {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />}
                <div className="main-head">
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Admin control</h1>
                    </div>
                    <p className="mb24 f13 fw350">Admin page /@ liars aks react</p>
                </div>
                <div className="list-reuqest">
                    <table style={{textAlign: "center", width: "100%", borderCollapse: "collapse"}}  cellpadding="6">
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Description</th>
                                <th>Photo</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listReq.map( (rq, i) => {
                                    let classStroke = rq.status === 0 ? "" : rq.status === 1 ? "stroke-yellow" : rq.status === 2 ? "stroke-green" : "stroke-red";
                                    return (
                                        <tr key={i} style={{borderBottom: "1px solid #d6d9dc"}} className="ps-relative">
                                            <td><Link to={`/users/${rq.owner._id}`}>{rq.owner.fullname || rq.owner.email}</Link></td>
                                            <td style={{"width": "400px"}}>{rq.description}</td>
                                            <td><img width="150" className="rq-photo" src={rq.photo} /></td>
                                            <td>{new Date(rq.created).toLocaleDateString()}</td>
                                            <td>{rq.statusString}</td>
                                            <td data-number={i}>
                                                {
                                                    classStroke === "" ? <div className="wrap-button-handle-able">
                                                        <button role="handle-request" className="accept-request" onClick={() => this.handleAcceptRequest(rq._id, rq.owner._id, i)}>
                                                            <svg className={`svg-icont`} viewBox="0 0 20 20">
                                                                <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                                                            </svg>
                                                        </button>

                                                        <button role="handle-request" className="reject-request" onClick={() => this.handleRejectRequest(rq._id, rq.owner._id, i)}>
                                                            <svg className={`svg-icont`} viewBox="0 0 20 20">
                                                                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                                                            </svg>
                                                        </button>
                                                    </div> : classStroke === "stroke-green" || classStroke === "stroke-yellow" ? <>
                                                        <button role="handle-request" className="accept-request">
                                                            <svg className={`svg-icont ${classStroke}`} viewBox="0 0 20 20">
                                                                <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                                                            </svg>
                                                        </button>
                                                        <button role="handle-request" className="reject-request">
                                                            <svg className={`svg-icont stroke-d2d2d2`} viewBox="0 0 20 20">
                                                                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                                                            </svg>
                                                        </button>
                                                    </> : <>
                                                        <button role="handle-request" className="accept-request stroke-d2d2d2">
                                                            <svg className={`svg-icont`} viewBox="0 0 20 20">
                                                                <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                                                            </svg>
                                                        </button>

                                                        <button role="handle-request" className={`reject-request ${classStroke}`}>
                                                            <svg className={`svg-icont`} viewBox="0 0 20 20">
                                                                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                                                            </svg>
                                                        </button>
                                                    </>
                                                }
                                                
                                            </td>
                                        </tr>     
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="clear-fix"></div>
                <div className="nearfooter" style={{maxWidth: "calc(100% - 300px - 24px)", padding: "40px 0px"}}>
                    <p>
                        Looking for more? Browse 
                        <a style={{ color: "#3af" }} href="#a"> the complete list of questions</a>
                        , or
                        <a style={{ color: "#3af" }} href="#a"> popular tags </a>
                        .Help us answer 
                        <a style={{ color: "#3af" }} href="#a"> unanswered questions</a>
                        .
                    </p>
                </div>
                
            </>
            
        )
    }
}

export default RequestUpgrade;