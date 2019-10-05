import React from 'react';
import UserInfo from '../users/UserInfo';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../editor/CodeBlock';
import { isAuthenticated } from '../../controllers/userController';
import { voteAnswerUp } from '../../controllers/voteController';

class AnswerItem extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            active: ''
        }
    }

    componentDidMount() {
        this.setState( {count: this.props.data.votes.length} );
    }

    handleAnswerVoteUp = () => {
        let ansId = this.props.data._id;
        let userId = isAuthenticated().user._id;
        let token = isAuthenticated().token;
        voteAnswerUp(ansId, userId, token)
        .then( res => {
            console.log(res);
            if(res.message === "Voted") this.setState( {count: res.votesLength, active: "active"} );
        })
    }
    
    render() {
        const { count, active } = this.state;
        const ans = this.props.data;
        const isActive = this.props.data.votes.indexOf(isAuthenticated().user._id) !== -1 ? "active" : "";
        return (
            <div className="answer mt16 mb16">
                <div className="post-layout d-flex w-100">
                    <div className="votecell post-layout--left mr24">
                        <div className="js-voting">
                            <button
                                className="js-vote--up"
                                onClick={this.handleAnswerVoteUp}
                            >
                                <svg aria-hidden="true" className={`svg-icon m0 iconArrowUpLg ${isActive} ${active}`} width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg>
                            </button>
                            <div className="vote-count">{count}</div>
                            <button className="js-vote--down">
                                <svg aria-hidden="true" className="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="votecell post-layout--right w-100">
                        <div className="post-text md-content">
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