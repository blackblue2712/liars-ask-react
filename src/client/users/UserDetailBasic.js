import React, { useState, useEffect } from 'react';
import { putUpdateInfo } from '../controllers/userController';
import Notify from '../components/Notify';

const UserDetailBasic = (props) => {

    const { email, fullname, _id } = props.userPayload;
    const [ffullname, setFullname]              = useState(fullname);
    const [currentPassword, setCurrentPassword] = useState("");

    const [showNotify, setShowNotify] = useState("");

    const handleUpdateInfo = () => {
        putUpdateInfo({_id, ffullname, currentPassword})
        .then( res => {
            setShowNotify(res.message);
        })
    }

    useEffect( () => {
        setFullname(fullname);
    },  [props.userPayload.email]);

    
    return (
        
        <div className="userInfoEditting bs-md">
            {showNotify !== "" &&  <Notify class="on" text={showNotify} clearMess={setShowNotify} />}
            <div className="d-flex pb12 mb12 bdb-black">
                <div className="mr24">
                    <button to="/users/1" className="s-btn btn-change-avatar">
                        <img className="bd50" src="https://res.cloudinary.com/ddrw0yq95/image/upload/v1569644228/75926534_p0_lo7upq.jpg" alt="avatar"/>
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
                            id="fullname" name="fullname" type="text" className="s-input w-100" value={ffullname}
                            onChange={ (e) => setFullname(e.target.value)}
                        />
                    </div>
                    <div className="post-title ps-relative mb4">
                        <label htmlFor="currentPassword" className="s-label mb4">
                            Current Password
                            <span className="required-7sPBq3">*</span>
                        </label>
                    </div>
                    <div className="ps-relative mb16">
                        <input
                            id="currentPassword" name="currentPassword" type="password" className="s-input w-100"
                            onChange={ (e) => setCurrentPassword(e.target.value) }
                        />
                    </div>
                </div>
            </div>
            
            <div className="d-flex w-100">
                <button type="button" className="s-btn btn-sm btn-outlined colorRed">Delete Account</button>
                <button type="button" className="s-btn btn-sm ml-auto btn-cancel">Cancel</button>
                <button
                    type="button" className="s-btn btn-sm btn-outlined colorGreen"
                    onClick={handleUpdateInfo}
                >Save</button>
            </div>
        </div>
    )
}

export default UserDetailBasic;