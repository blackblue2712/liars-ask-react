import React, { useEffect } from 'react';
import Mde from '../editor/Mde';
import Tags from '../components/Tags' ;
// import { Link } from 'react-router-dom';


const AddAnnouncements = props => {

    useEffect( () => {
        let editor = document.querySelector("textarea.mde-text ");
        editor.setAttribute("id", "announ-content")
        editor.setAttribute("name", "announ-content")

        let tagsIncludedSize = document.querySelector(".tags-included").offsetWidth;
        document.querySelector("#tageditor-replacing-tagnames--input").style.paddingLeft = tagsIncludedSize + 10 + "px";
    })

    let randomstring = Math.floor(Math.random() * 10 + 1)  + Math.random().toString(36).slice(-7);
    return (
        <>
            <div className="main-head">
                <div className="grid d-flex align-items-centers mb16">
                    <h1 className="fs-headline1 mr-auto">New announcement</h1>
                    {/* <Link to="/admin/tags/new" className="s-btn s-btn__outline s-btn__primary">Add new tag</Link> */}
                </div>
                {/* <p className="mb24 f13 fw350">A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p> */}
            </div>

            <div id="mainbar">
                <div id="announ-form">
                    <div className="bg-white bar-sm bs-md p16">
                        <div className="post-title ps-relative mb16">
                            <label htmlFor="title" className="s-label mb4">
                                Title
                                <p className="s-desscription mt4">A programming language or whatever </p>
                            </label>
                        </div>
                        <div className="ps-relative mb16">
                            <input id="title" name="title" type="text" className="s-input w-100" placeholder="Enter title here"/>
                        </div>

                        {/* <div className="post-title ps-relative mb16">
                            <label htmlFor="password" className="s-label mb4">
                                Password
                                <p className="s-desscription mt4">Password auto generate</p>
                            </label>
                        </div>
                        <div className="ps-relative mb16">
                            <input id="password" name="password" type="text" className="s-input w-100" value={randomstring} disabled/>
                        </div> */}
                        
                        <div className="post-editor mb16">
                            <div className="ps-relative">
                                <label htmlFor="announ-content" className="s-label mb16 d-block">
                                    Body
                                    <p className="s-desscription mt4">Announcement body (all of the information about the announcement)</p>
                                </label>
                                <Mde />
                                {/* CAPTOPN */}
                                <div className="d-flex align-items-center pb12 fc-light fs-caption mt16 mb24">
                                    <div className="mr16">
                                        ``` <code className="ba bc-black-9 px4 py2 bar-sm bg-black-050 fc-black-800 ff-mono">code</code> ```
                                    </div>
                                    <div className="mr16 fw-bold">
                                        **bold**
                                    </div>
                                    <div className="mr16 fs-italic">
                                        *italic*
                                    </div>
                                    <div className="">
                                        &gt;quote
                                    </div>
                                </div>
                                {/* TAGS EDITOR */}
                                <div className="ps-relative pt24" id="tag-editor">
                                    <label htmlFor="tagnames" className="s-label mb16 d-block">
                                        Tags
                                        <p className="s-desscription mt4">Add tags to describe what your announcement is about</p>
                                    </label>
                                    <div className="ps-relative mb16">
                                        <input 
                                            id="tagnames" name="tagnames" type="text" className="s-input w-100 d-none" placeholder="e.g. (javascript xml react)"
                                            value="css scss less"    
                                        />
                                        <div className="tags-editor ps-relative" >
                                            <span className="tags-included ps-absolute">
                                                <Tags name="css" close={true}/>
                                            </span>
                                        <input
                                            type="text" className=" s-input w-100" placeholder="e.g. (javascript xml react)"
                                            id="tageditor-replacing-tagnames--input"
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-title ps-relative mb16">
                            <label htmlFor="is-important" className="s-label mb4">
                                Is important
                                <p className="s-desscription mt4">Is this announcement important? Check it</p>
                            </label>
                        </div>
                        <div className="ps-relative mb16">
                            <input id="is-important" name="is-important" type="checkbox" className="" />
                        </div>

                        <button className="s-btn s-btn__outline s-btn__primary mt24">Post this</button>
                    </div>
                </div>
            </div>
            <div className="clear-fix"></div>
        </>
    )
}

export default AddAnnouncements;