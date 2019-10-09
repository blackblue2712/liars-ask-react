import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div id="notfound">
            <p>404</p>
            <Link to="/">Go back home</Link>
        </div>
    )
}