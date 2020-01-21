import React from 'react';
import DefaultImage from '../../images/default.png';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChangeRole = (uid, roleChange) => {
        console.log(uid, roleChange);
    }

    render() {
        console.log(this.props)
        const user = this.props.userIf;
        const pris = this.props.pris;
        return (
            <div className="grid-layout--cell tags-cell">
                <div className="user-gavatar48">
                    <Link to={`/users/${user._id}`}>
                        <img className="user-avatar" loading="lazy" src={user.photo || DefaultImage} alt="none"/>
                    </Link>
                </div>
                <div className="user-detail d-flex">
                    <div>
                    <Link to={`/users/${user._id}`}>{user.fullname || user.email}</Link>
                        {/* <span className="user-location">{props.userLocation}</span> */}
                        <div className="-flair">
                            <span className="reputation-score" title="reputation this week: 1,110 total reputation: 413,462" dir="ltr">{user.followers.length}</span>
                        </div>
                    </div>
                </div>
                {/* <div className="user-tags clear-fix">
                    <a href="#t">pandas</a>, <a href="#t">python</a>, <a href="#t">dataframe</a>
                </div> */}
                <div className="user-tags clear-fix">
                    <select name="user-roles" onChange={({target}) => this.handleChangeRole(user._id, target.value)}>
                        {
                            pris.map( pr => {
                                return pr.permission === user.roles.permission ? <option value={pr._id}>{pr.permission} - {pr.description}</option>
                                                                               : <option selected={true} value={pr._id}>{pr.permission} - {pr.description}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}


export default UserInfo