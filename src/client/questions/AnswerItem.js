import React from 'react';
import Code from 'react-code-prettify';
import UserInfo from '../users/UserInfo';

class AnswerItem extends React.Component {
    
    render() {
        return (
            <div className="answer mt16 mb16">
                <div className="post-layout d-flex">
                    <div className="votecell post-layout--left mr24">
                        <div className="js-voting">
                            <button className="js-vote--up">
                                <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg>
                            </button>
                            <div className="vote-count">{499}</div>
                            <button className="js-vote--down">
                                <svg aria-hidden="true" className="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="votecell post-layout--right">
                        <div className="post-text">
                            <p>
                                For a more simple and up to date answer:
                            </p>
                            <Code
                                codeString={`backdrop-filter: blur(6px);`} 
                                language="css" 
                            />
                            <p>Note <a href="https://caniuse.com/#feat=css-backdrop-filter" rel="nofollow noreferrer">browser support</a> is not perfect but in most cases a blur would be non essential.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <UserInfo
                                username={Math.random().toString(36).substring(7)}
                                userLocation="Bratislava, Slovakia"
                                userImage={`https://api.adorable.io/avatars/55/${Date.now() + Math.random(1 * 10)}`}
                                userReputation="1,110"
                            />
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }

}   

export default AnswerItem;