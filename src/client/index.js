import React from 'react';
import './style.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';

import Footer from './components/Footer';
import { Route, Switch, withRouter } from "react-router-dom";
import TagsComponent from './tags/TagsComponent';

function index() {
    return <Switch>
        <>
            <Header />
            <div className="container"
                style={{marginTop: "50px"}}
            >
                <LeftSidebar />
                <Route exact path="/" component={Content} />
                <Route exact path="/tags" component={TagsComponent} />
            </div>
            <Footer />
        </>
    </Switch>
}

export default withRouter(index);