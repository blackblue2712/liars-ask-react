import React, { Component } from 'react';
import './LeftSidebar.css';

class LeftSidebar extends Component {
    render() {
        return (
            <div className="left-sidebar ps-relative" id="left-sidebar">
                <div className="ps-sticky js-sticky-leftnav">
                    <nav role="navigation">
                        <ul className="nav-links">
                            <li className="youarehere">
                                <a className="nav-links--link" href="#home">Home</a>
                            </li>
                            <li className="">
                                <ul>
                                    <li>
                                        <a className="nav-links--link -link__with-icon d-flex align-items-center" href="#home">
                                            <svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM8 15.32a6.4 6.4 0 0 1-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 0 1 2.32 10.24v.01z"></path></svg>
                                            <span className="-link--chanel-name">Liars ask</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-links--link" href="#home">Tags</a>
                                    </li>
                                    <li>
                                        <a className="nav-links--link" href="#home">Users</a>
                                    </li>
                                    <li>
                                        <a className="nav-links--link" href="#home">Jobs</a>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="#question" className="nav-links--link -link__with-icon -link__with-icon-custom">
                                                    <svg viewBox="0 0 10 18" className="svg-4 svg-icon iconGlobe" width="18" height="18"><path d="M2,5 C2,8 8,8 8,5" /></svg>
                                                    <span className="-link--chanel-name">TEAMS</span>
                                                </a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default LeftSidebar;