import React from 'react';

import ListRestItem from '../ListRestItem/ListRestItem';
import signoutIcon from '../../../../images/logout.svg'

const ListRests = props => {
    return (
        <ul className="list-rest s-anchors">
            <ListRestItem
                title="Your profile"
                href={`/users/profile/${props.uid}`}
            />
            <ListRestItem
                title="Your questions"
                href="/questions"
            />
            <hr className="oc7" />
            <li>
                <button
                    className="s-btn s-btn__hovero w-100 text-left d-flex align-items-center btn-signout"
                    onClick={props.handleSignout}
                >
                    <img width="18" src={signoutIcon} alt="signout" />
                    <span className="fs-body1 d-block">&nbsp;&nbsp;Signout this account</span>
                </button>
            </li>
        </ul>
    )
}

export default ListRests;