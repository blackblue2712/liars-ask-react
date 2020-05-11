import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './QuestionsComponent.css';
import Post from './Post';
import Sidebar from '../components/Sidebar';
import AskAQuestion from '../components/AskAQuestion';
import { getSingleQuestion } from '../../controllers/askController';
import AnswerItem from './AnswerItem';
import YourAnswer from './YourAnswer';
import SkeletonQues from '../components/SkeletonQues';

class QuestionsComponent extends Component {
    constructor() {
        super();
        this.state = {
            ques: null,
            answersArr: []
        }
    }

    async componentDidMount() {
        const data = await getSingleQuestion(this.props.match.params.quesId);
        if(!data.message) {
            this.setState( {ques: data, answersArr: data.answers} );
        } else {
            this.props.history.push("/404");
        }
    }

    handleAddAnswer = (ans) => {
        this.setState( {answersArr: [...this.state.answersArr, ans]} );
    }

    render() {
        let { ques, answersArr } = this.state;
        if(!ques) {
            return <SkeletonQues />
        } else {
            return (
                <div id="content">
                    <div id="mainbar">
    
                        <div className="main-head">
                            <div className="grid d-flex align-items-centers mb16">
                                <h1 className="fs-headline1 mr-auto">{ques.title}</h1>
                                <div className="s-btn-group ml20">
                                    <AskAQuestion />
                                </div>
                            </div>
    
                            <div className="d-flex algin-items-center f13 bc-black-2 bb pb8">
                                <div className="mb8 mr16">
                                    <span className="fc-light mr2">Asked</span>
                                    <time>{moment(ques.created).fromNow()}</time>
                                </div>
                                {/* <div className="mb8 mr16">
                                    <span className="fc-light mr2">Asked</span>
                                    <a href="?lastactivity" className="s-link s-link__inherit" title="2019-09-24 15:23:18Z">today</a>
                                </div> */}
                                <div className="mb8 mr16">
                                    <span className="fc-light mr2">By</span>        
                                    <Link to={`/users/${ques.owner._id}`}>{ques.owner.email}</Link>
                                </div>
                            </div>
                        </div>
    
                        <div id="questbar">
                            <div className="question" id="id-question">
                                <Post
                                    data={ques}
                                />
                            </div>
                        </div>
                        
                        <div id="answers" className="mt24">
                            <div className="answers-header">
                                <h2 className="fs-count-answer">{answersArr.length} Answers</h2>
                                
                            </div>
                            <div id="list-answers">
                                {
                                    answersArr.map( (ans, i) => {
                                        return <AnswerItem data={ans} key={i}/>
                                    })
                                }
                            </div>
    
                            {/* YOUR ANSWER */}
                            <YourAnswer addAnswer={this.handleAddAnswer} />
                            
                        </div>
    
                        
                    </div>
    
                    <Sidebar />
                    <div className="clear-fix"></div>
                </div>
            )
        }
    }
}

export default QuestionsComponent;