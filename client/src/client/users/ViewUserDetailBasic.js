import React from 'react';
import Notify from '../components/Notify';
import Default from '../../images/default.png';
import { isAuthenticated, followUser } from '../../controllers/userController';

class ViewUserDetailBasic extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "",
            _id: "",
            email: "",
            fullname: "",
            photo: "",
            followerIds: [],
            isFollowed: "Follow",
            color: "colorGreen"
        }
    
    }

    componentWillReceiveProps(props) {
        const { email, fullname, photo, followers, _id } = props.userPayload;
        const followingId = isAuthenticated().user._id;

        const followerIds = [];
        followers.map( fl => followerIds.push(fl._id));

        const flag = followerIds.indexOf(followingId);
        const isFollowed =  flag === -1 ? "Follow" : "UnFollow";
        const color = flag === -1 ? "colorGreen" : "colorRed";
        this.setState( {email, fullname, photo, followerIds, _id, isFollowed, color} );
    }

    handleFollowUser = () => {
        const followingId = isAuthenticated().user._id;
        const followedId = this.state._id;
        this.setState( {isFollowed: this.state.isFollowed === "Follow" ? "UnFollow" : "Follow", color: this.state.color === "colorGreen" ? "colorRed" : "colorGreen"} )

        followUser( {followingId, followedId} )
        .then( res => {
            this.setState({ message: res.message } );
        })
    }

    setShowNotify = () => {
        this.setState( {message: ""} );
    }


    render() {
        let { message, photo, email, fullname, isFollowed, color } = this.state;
        return (
        
            <div className="userInfoEditting bs-md">
                {message !== "" &&  <Notify class="on" text={message} clearMess={this.setShowNotify} />}
                <div className="d-flex pb12 mb12 bdb-black">
                    <div className="mr24">
                        <button className="s-btn btn-change-avatar ps-relative">
                            <img className="bd50" id="user-photo" src={photo || Default} alt="avatar"/>
                            <div className="choose-image d-none"></div>
                        </button>
                    </div>
                    <div className="w-100">
                        <div className="post-title ps-relative mb4">
                            <label htmlFor="email" className="s-label mb4">
                                Email
                                <span className="required-7sPBq3">*</span>
                            </label>
                        </div>
                        <div className="ps-relative mb16">
                            <input
                                id="email" name="email" type="text" className="s-input w-100" value={email}
                                readOnly
                            />
                        </div>
                        <div className="post-title ps-relative mb4">
                            <label htmlFor="fullname" className="s-label mb4">
                                FULLNAME
                            </label>
                        </div>
                        <div className="ps-relative mb16">
                            <input
                                id="fullname" name="fullname" type="text" className="s-input w-100" value={fullname}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                
                <div className="d-flex w-100">
                    {/* <button type="button" className="s-btn btn-sm btn-outlined colorRed">Delete Account</button>
                    <button type="button" className="s-btn btn-sm ml-auto btn-cancel">Cancel</button> */}
                    <div id="wrap-btn-loading" className="ps-relative ml-auto">
                        <button
                            type="button" className={`s-btn btn-sm btn-outlined ${color}`}
                            onClick={this.handleFollowUser}
                        >
                            {isFollowed}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewUserDetailBasic;