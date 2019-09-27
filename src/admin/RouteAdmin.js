import React from 'react';
import { Route } from "react-router-dom";
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Content from './components/Content';
import LeftSidenar from './components/LeftSidebar';
import Tags from './tags/Tags';
import AddTag from './tags/AddTag';

const RouteAdmin = props => {
    return <>
        <div className="container" style={{marginTop: "50px"}}>
            <LeftSidenar />
            <Header />
            <div id="content">
                <Route exact path="/admin" component={Content}></Route>
                <Route exact path="/admin/tags" component={Tags}></Route>
                <Route exact path="/admin/tags/new" component={AddTag}></Route>
            </div>
        </div>

        <Footer />
    </>
}

export default RouteAdmin;