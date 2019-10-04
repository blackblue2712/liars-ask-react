import React from 'react';
import { Link } from 'react-router-dom';
import ListWrapper from './ListWrapper';
import { getQuestions } from '../../controllers/askController';

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
        console.log(questions)
        return (
            <div id="content">
                <div className="main-head">
                    {/* <Notify />  
                    {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />} */}
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Blogs</h1>
                        <Link to="/asks/new" className="s-btn s-btn__outline s-btn__primary">Ask a question</Link>
                    </div>
                    <p className="mb24 f13 fw350">Write blog about whatever you want to share with everyone &lt;3</p>
                </div>
                <ListWrapper data={questions}/>
                <div className="clear-fix"></div>
            </div>
        )
    }
}

export default Questions;