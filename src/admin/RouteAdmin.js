import React from 'react';
import { Route } from "react-router-dom";
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Content from './components/Content';
import LeftSidenar from './components/LeftSidebar';
import Tags from './tags/Tags';
import AddTag from './tags/AddTag';
import UsersComponent from './users/UsersComponent';
import AddUser from './users/AddUser';
import Announcements from './announcements/Announcements';
import AddAnnouncement from './announcements/AddAnnouncement';

const RouteAdmin = props => {
    return <>
        <div className="container" style={{marginTop: "50px"}}>
            <LeftSidenar />
            <Header />
            <div id="content">
                <Route exact path="/admin" component={Content}></Route>
                <Route exact path="/admin/tags" component={Tags}></Route>
                <Route exact path="/admin/tags/new" component={AddTag}></Route>
                <Route exact path="/admin/users" component={UsersComponent}></Route>
                <Route exact path="/admin/users/new" component={AddUser}></Route>
                <Route exact path="/admin/announcements" component={Announcements}></Route>
                <Route exact path="/admin/announcements/new" component={AddAnnouncement}></Route>
            </div>
        </div>

        <Footer />
    </>
}

export default RouteAdmin;