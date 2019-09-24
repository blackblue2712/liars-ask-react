import React, { Component } from 'react';
import './Header.css';
import brandLogo from '../images/logo@256.png';

class Header extends Component {
    render() {
        return (
            <header id="header" className="ps-fixed w-100">
                <div className="container d-flex align-items-center">
                    <div className="brand-logo d-flex align-items-center">
                        <a href="/">
                            <img src={brandLogo} alt="brand-logo"/>
                        </a>
                    </div>
                    <a href="#toggle" className="left-sidebar-toggle d-flex align-items-center justify-content-center">
                        <span className="ps-absolute"></span>
                    </a>
                    <ul className="menu-horizontal w-100 d-flex align-items-center">
                        <li className="w-100">
                            <form action="#search">
                                <div className="ps-relative">
                                    <input type="text" name="q" placeholder="Search..." maxLength="240" className="s-input s-input__search js-search-field" />
                                    <svg aria-hidden="true" className="svg-icon s-input-icon s-input-icon__search iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path></svg>
                                </div>
                            </form>
                        </li>
                        <li className="item-top">
                            <a href="#help">
                                <svg aria-hidden="true" className="svg-icon iconHelp" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23zM11.77 8c-.3.34-.65.65-1.02.91l-.53.37c-.26.2-.42.43-.5.69a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.03-.66.12-1.21.4-1.66.4-.49.88-.9 1.43-1.22.16-.12.28-.25.38-.39a1.34 1.34 0 0 0 .02-1.71c-.24-.31-.51-.46-1.03-.46-.51 0-.8.26-1.02.6-.21.33-.18.73-.18 1.1H5.75c0-1.38.35-2.25 1.1-2.76.52-.35 1.17-.5 1.93-.5 1 0 1.79.18 2.49.71.64.5.98 1.18.98 2.12 0 .57-.2 1.05-.48 1.44z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;