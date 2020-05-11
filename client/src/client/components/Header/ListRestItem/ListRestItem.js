import React from 'react';
import { Link } from 'react-router-dom';

const ListRestItem = props => {
    return (
        <li>
            <Link to={props.href}>
                <span className="fs-body1 d-block">{props.title}</span>
                <span className="fs-caption d-block">{props.description}</span>
            </Link>
        </li>
    )
}

export default ListRestItem;