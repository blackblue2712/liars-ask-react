import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LeftSidebar.css';
import { isAuthenticated } from '../../../controllers/userController';
import NavItems from './NavItems/NavItems';

class LeftSidebar extends Component {

    componentDidMount () {
        let whereami = this.props.location.pathname.split("/")[1];
        if(!whereami) whereami = "home";
        Array.from(document.querySelectorAll(".canactive")).map( el => el.classList.remove("youarehere"));
        if(document.getElementById(whereami)) {
            document.getElementById(whereami).classList.add("youarehere");
        }
    }
    componentDidUpdate () {
        let whereami = this.props.location.pathname.split("/")[1];
        if(whereami === "") whereami = "home";
        Array.from(document.querySelectorAll(".canactive")).map( el => el.classList.remove("youarehere"));
        if(document.getElementById(whereami)) {
            document.getElementById(whereami).classList.add("youarehere");
        }
    }

    render() {
        return (
            <div className="left-sidebar ps-fixed" id="left-sidebar">
                <div className="ps-sticky js-sticky-leftnav">
                    <nav role="navigation">
                        <NavItems isAuthenticated={isAuthenticated} />
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(LeftSidebar);