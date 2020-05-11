import React, { useState, useEffect } from 'react';
import Mde from '../editor/Mde';
import { putUpdateStory } from '../../controllers/userController';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../editor/CodeBlock';
import Notify from '../components/Notify';

const UserDetailStory = (props) => {

    const { quotes, bio, _id, fullname } = props.userPayload;
    const [showNotify, setShowNotify] = useState("");


    useEffect( () => {
    }, [props.userPayload.email])

    return (
        <div className="bio bs-md p20">
            {showNotify !== "" &&  <Notify class="on" text={showNotify} clearMess={setShowNotify} />}
            <div className="post-title ps-relative mb4">
                <label htmlFor="quotes" className="s-label mb4">
                    <i>{fullname}</i>'s quotes
                </label>
            </div>
            <div className="ps-relative mb16">
                <input
                    id="quotes" name="quotes" type="text" className="s-input w-100"
                    value={quotes}
                />
            </div>
            <div className="post-title ps-relative mb4">
                <label htmlFor="bio" className="s-label mb4">
                    Bio
                </label>
            </div>
            <div className="post-title ps-relative mb4">
                <ReactMarkdown
                    source={bio}
                    renderers={{ code: CodeBlock }}
                />
            </div>
            
        </div>
    )
}

export default UserDetailStory;