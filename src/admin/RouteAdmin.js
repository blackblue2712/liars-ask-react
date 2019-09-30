import React from 'react';
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
import PrivateRoute from '../PirvateRoute';

const RouteAdmin = props => {
    return <>
        <div className="container" style={{marginTop: "50px"}}>
            <LeftSidenar />
            <Header />
            <div id="content">
                <PrivateRoute exact path="/admin" component={Content}></PrivateRoute>
                <PrivateRoute exact path="/admin/tags" component={Tags}></PrivateRoute>
                <PrivateRoute exact path="/admin/tags/new" component={AddTag}></PrivateRoute>
                <PrivateRoute exact path="/admin/users" component={UsersComponent}></PrivateRoute>
                <PrivateRoute exact path="/admin/users/new" component={AddUser}></PrivateRoute>
                <PrivateRoute exact path="/admin/announcements" component={Announcements}></PrivateRoute>
                <PrivateRoute exact path="/admin/announcements/new" component={AddAnnouncement}></PrivateRoute>
            </div>
        </div>

        <Footer />
    </>
}

export default RouteAdmin;