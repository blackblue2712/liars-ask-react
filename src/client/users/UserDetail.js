import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail =  props => {
    return (
        <div id="content">
            <div className="main-head">
                {/* <div className="grid d-flex align-items-centers mb16">
                    <h1 className="fs-headline1 mr-auto">Đặng Hữu Nghĩa</h1>
                </div>
                <p className="mb24 f13 fw350">B1706729</p> */}
                <div className="subheader d-flex align-items-center w-100">
                    <div id="tabs" className="d-flex align-items-center w-100">
                        <a href="#u" >Profile</a>
                        <a href="#u" className="youarehere">Activity</a>
                        <a href="#u" >Developer Story</a>
                        <a href="#u" >Edit profile and setting</a>
                    </div>
                    <div className="mini-avatar ml-auto d-flex align-items-center w-100" style={{justifyContent: "flex-end"}}>
                        <div className="name">Đặng Hữu Nghĩa</div>
                        <Link to="/users/1" className="d-flex align-items-center">
                            <img className="bd50" width="35" height="35" src="https://res.cloudinary.com/ddrw0yq95/image/upload/v1569644228/75926534_p0_lo7upq.jpg" alt="avatar"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;