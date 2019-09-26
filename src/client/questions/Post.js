import React, { Component } from 'react';
import Tags from '../components/Tags';
import Code from 'react-code-prettify';
class Post extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="post-layout d-flex">
                <div className="votecell post-layout--left mr24">
                    <div className="js-voting">
                        <button className="js-vote--up">
                            <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg>
                        </button>
                        <div className="vote-count">{this.props.voteCount}</div>
                        <button className="js-vote--down">
                            <svg aria-hidden="true" className="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="votecell post-layout--right">
                    <div className="post-text">
                        <p>
                            I am having trouble applying a blur effect on a semi-transparent overlay div. I'd like everything behind the div the be blurred, like this:
                        </p>
                        <p><a href="https://i.stack.imgur.com/OzXrT.png" rel="noreferrer"><img src="https://i.stack.imgur.com/OzXrT.png" alt="SFW" /></a></p>
                        <p>Here is a jsfiddle which doesn't work: <a href="http://jsfiddle.net/u2y2091z/" rel="noreferrer">http://jsfiddle.net/u2y2091z/</a></p>
                        <p>Any ideas how to make this work? I'd like to keep this as uncomplicated as possible and have it be cross-browser. Here is the CSS I'm using:</p>
                        <Code
                            codeString={this.props.preString} 
                            language="css" 
                        /> 
                    </div>
                    <div className="post-taglist d-flex align-items-center">
                        <Tags name="css"/>
                        <Tags name="scss"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Post;