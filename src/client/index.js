import React from 'react';
import './style.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';
import Mainbar from './components/Mainbar';

function index() {
    return <div id="wrap">
        <Header />
        <div className="container"
            style={{marginTop: "50px"}}
        >
            <LeftSidebar />
            <Content>
                <Mainbar />
            </Content>
        </div>
    </div>
}

export default index;