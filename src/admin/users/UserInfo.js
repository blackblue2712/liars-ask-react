import React from 'react';
import DefaultImage from '../../images/default.png';
import { Link } from 'react-router-dom';
import { putChangePrivileges, isAuthenticated } from '../../controllers/userController';
import Notify from '../components/Notify';

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
    }

    clearMess = () => {
        this.setState( {message: ""} );
    }

    handleChangeRole = (uid, pid) => {
        console.log(uid, pid);
        putChangePrivileges(uid, pid, isAuthenticated().token)
        .then( res => {
            this.setState( {message: res.message} );
        })
        .catch( err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.props)
        const user = this.props.userIf;
        const pris = this.props.pris;
        const { message } = this.state;
        return (
            <div className="grid-layout--cell tags-cell">
                <Notify />  
                {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />}
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
                            <span className="reputation-score" title="reputation this week: 1,110 total reputation: 413,462" dir="ltr">{user.followers.length} Follwers</span>
                        </div>
                        <div className="-flair">
                            <span className="reputation-score" title="reputation this week: 1,110 total reputation: 413,462" dir="ltr">{user.following.length} Following</span>
                        </div>
                    </div>
                </div>
                {/* <div className="user-tags clear-fix">
                    <a href="#t">pandas</a>, <a href="#t">python</a>, <a href="#t">dataframe</a>
                </div> */}
                <div className="user-tags clear-fix">
                    <select name="user-roles" className="user-roles" onChange={({target}) => this.handleChangeRole(user._id, target.value)}>
                        {
                            pris.map( pr => {
                                if(user.email=="liars") console.log(pr.permission, user.roles.permission);  
                                return <option selected={pr.permission === user.roles.permission} value={pr._id}>{pr.permission} - {pr.description}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}


export default UserInfo;