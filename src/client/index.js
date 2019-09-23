import React from 'react';
import './style.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';

function index() {
    return <div id="wrap">
        <Header />
        <div className="container"
            style={{marginTop: "50px"}}
        >
            <LeftSidebar />
        </div>
    </div>
}

export default index;