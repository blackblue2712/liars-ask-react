import React, { useState, useEffect } from 'react';
import Mde from '../editor/Mde';
import { putUpdateStory } from '../controllers/userController';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../editor/CodeBlock';

const UserDetailStory = (props) => {

    const { quotes, bio, _id } = props.userPayload;
    const [fquotes, setQuotes] = useState(quotes);

    const handleChangeStory = () => {
        let editor = document.querySelector("textarea.mde-text ");

        if(!editor) {
            alert("Please out preview mode");
        } else {
            let bioUpdate = editor.value;
            putUpdateStory({bioUpdate, fquotes, _id})
            .then( res => {
                console.log(res);
            })
        }
    }

    useEffect( () => {
        let editor = document.querySelector("textarea.mde-text");
        editor.setAttribute("id", "bio")
        editor.setAttribute("name", "bio");

        setQuotes(quotes);
    }, [props.userPayload.email])

    return (
        <div className="bio bs-md p20">
            <div className="post-title ps-relative mb4">
                <label htmlFor="quotes" className="s-label mb4">
                    Your quotes
                </label>
            </div>
            <div className="ps-relative mb16">
                <input
                    id="quotes" name="quotes" type="text" className="s-input w-100"
                    value={fquotes}
                    onChange={ (e) => setQuotes(e.target.value) }
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
            <div className="ps-relative mb16">
                <Mde />
            </div>
            <div className="d-flex w-100">
                <button
                    type="button" className="s-btn btn-sm btn-outlined colorGreen"
                    onClick={handleChangeStory}
                >Save
                </button>
            </div>
        </div>
    )
}

export default UserDetailStory;