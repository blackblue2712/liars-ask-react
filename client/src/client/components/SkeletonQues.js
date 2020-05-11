import React from 'react';

import "./Skeleton.css";

export default function() {
    return (
        <div id="skeleton-ques">
            <div id="content">
                <div id="mainbar" className="w-100">
                    <div className="loading-head">
                        <div className="loading"></div>
                        <div className="loading"></div>
                        <div className="d-flex" style={{width: "120px"}}>
                            <div style={{marginRight: "12px"}} className="loading-sm"></div>
                            <div className="loading-sm"></div>
                        </div>
                    </div>
                    <div className="loading-body">
                        <div className="loading"></div>
                        <div className="loading"></div>
                        <div className="loading"></div>
                        <div className="loading"></div>
                        <div className="loading"></div>
                    </div>
                    <div className="loading-bot">
                        <div className="loading-big"></div>
                        <div className="d-flex">
                            <div className="loading-tag"></div>
                            <div className="loading-tag"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}