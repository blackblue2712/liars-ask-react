import React from 'react';
import ListWrapper from './ListWrapper';
import { getQuestions } from '../../controllers/askController';
import AskAQuestion from '../components/AskAQuestion';

class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        getQuestions()
        .then( res => {
            this.setState( {questions: res.payload} )
        })
    }

    render() {
        const { questions } = this.state;
        // console.log(questions)
        return (
            <div id="content">
                <div className="main-head">
                    {/* <Notify />  
                    {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />} */}
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Top Questions</h1>
                        <AskAQuestion />
                    </div>
                    <p className="mb24 f13 fw350"></p>
                </div>
                <ListWrapper data={questions}/>
                <div className="clear-fix"></div>
            </div>
        )
    }
}

export default Questions;