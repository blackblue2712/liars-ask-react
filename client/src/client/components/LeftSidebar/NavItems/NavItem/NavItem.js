import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
    return (
        <li id={props.id} className={`canactive ${props.active}`}>
            <Link className="nav-links--link" to={props.href}>{props.title}</Link>
        </li>
    )
}

export default NavItem;