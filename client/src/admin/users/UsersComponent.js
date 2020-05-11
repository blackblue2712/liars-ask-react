import React, { Component } from 'react';
import UserInfo from './UserInfo';
import DebounceFind from './DebounceFind';
import { findUser, getPrivileges, isAuthenticated, adminGetUsers } from "../../controllers/userController"


class TagsComponent extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            pris: [],
            message: ""
        }
    }

    componentDidMount() {
        Promise.all([
            getPrivileges(),
            // adminGetUsers(uid)
        ])
        .then( res => {
            this.setState( {pris: res[0]} );
        })
        .catch( err => {
            alert("can not get privileges");
        })

        // let users = await adminGetUsers(uid);
        // let pris = await getPrivileges();
        // this.setState( {users, pris} );
    }

    handleSearchUser = (text) => {
        let uid = isAuthenticated().user._id;
        findUser(text, uid)
        .then( res => {
            if(!res.message) {
                this.setState( {users: res} )
            }
        })
    }



    render() {
        const { users, pris, message } = this.state;
        return (
            <>
                <div className="main-head">
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Users</h1>
                    </div>
                    <p className="mb24 f13 fw350">Find users for ...</p>
                    <div className="grid-ai grid-tags mb16 d-flex align-items-center">
                        <div className="ps-relative mr-auto">
                            <DebounceFind handleSearchUser={this.handleSearchUser} />
                            <svg aria-hidden="true" className="svg-icon s-input-icon s-input-icon__search iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path></svg>
                        </div>
                        <div className="s-btn-group">
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Reputation</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">New users</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Voters</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Editors</a>
                            <a href="#popular" className="s-btn s-btn__outline s-btn__primary">Moderators</a>
                        </div>
                    </div>
                </div>

                <div id="tags-list">
                    <div id="tags-browser">
                        {
                            users && users.length > 0 ? 
                                users.map ( (user, i) => {
                                    return <UserInfo
                                        key={i}
                                        userIf={user}
                                        pris={pris}
                                    />   
                                })
                            : "No user found"
                        }
                        
                    </div>
                </div>
            </>
        )
    }
}

export default TagsComponent;