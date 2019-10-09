import React from 'react';
import { getSingleAnnouncement } from '../../controllers/announcementController';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../editor/CodeBlock';
class SingleAcm extends React.Component {
    constructor() {
        super();
        this.state = {
            acm: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.acmId;
        getSingleAnnouncement(id)
        .then( res => {
            if(!res.message) {
                this.setState( {acm: res} );
            } else {
                this.props.history.push("/404");
            }
        })
    }


    render() {
        const { acm } = this.state
        return (
            <div id="content">
                <div id="mainbar">
                    <div className="main-head">
                        <div className="grid d-flex align-items-centers mb16">
                            <h1 className="fs-headline1 mr-auto">{acm.title}</h1>
                        </div>
                        <p className="mb24 f13 fw350"></p>
                    </div>

                    <div className="bg-white bar-sm bs-md p16 md-content">
                        <ReactMarkdown source={acm.body} renderers={{ code: CodeBlock }} />
                    </div>

                    <div className="clear-fix"></div>
                    <div className="nearfooter" style={{padding: "40px 0px"}}>
                        <p>
                            Looking for more? Browse 
                            <a style={{ color: "#3af" }} href="#a"> the complete list of questions</a>
                            , or
                            <a style={{ color: "#3af" }} href="#a"> popular tags </a>
                            .Help us answer 
                            <a style={{ color: "#3af" }} href="#a"> unanswered questions</a>
                            .
                        </p>
                    </div>
                </div>
                <div className="clear-fix"></div>
            </div>
        )
    }
}

export default SingleAcm;