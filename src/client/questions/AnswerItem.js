import React from 'react';
import UserInfo from '../users/UserInfo';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../editor/CodeBlock';

class AnswerItem extends React.Component {
    
    render() {
        const ans = this.props.data;
        
        return (
            <div className="answer mt16 mb16">
                <div className="post-layout d-flex w-100">
                    <div className="votecell post-layout--left mr24">
                        <div className="js-voting">
                            <button className="js-vote--up">
                                <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg>
                            </button>
                            <div className="vote-count">{ans.votes}</div>
                            <button className="js-vote--down">
                                <svg aria-hidden="true" className="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="votecell post-layout--right w-100">
                        <div className="post-text">
                            <ReactMarkdown source={ans.body} renderers={{ code: CodeBlock }} />
                        </div>
                        <div className="d-flex justify-content-end">
                            <UserInfo
                                username={ans.owner.email}
                                // userLocation="Bratislava, Slovakia"
                                userImage={ans.owner.photo}
                                userFullname={ans.owner.fullname}
                                userId={ans.owner._id}
                            />
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }

}   

export default AnswerItem;