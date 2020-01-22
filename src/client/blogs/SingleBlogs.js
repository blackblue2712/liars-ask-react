import React, {useState, useEffect} from 'react';
import { getSingleBlog } from '../../controllers/blogController';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../editor/CodeBlock';
import Tags from '../components/Tags'
import SidebarWidget from '../components/SidebarWidget';

class SingleBlog extends React.Component {
    constructor() {
        super();
        this.state = {
            blog: {}
        }
    }

    componentDidMount() {
        try {
            getSingleBlog(this.props.match.params.blogId)
            .then( res => {
                if(res) this.setState( {blog: res} )
            })
        } catch(e) {
            console.log(e);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        try {
            getSingleBlog(nextProps.match.params.blogId)
            .then( res => {
                if(res) this.setState( {blog: res} )
            })
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const { blog } = this.state;
        return (
            <div id="content">
                <div id="mainbar">
                    <div className="main-head">
                        <div className="grid d-flex align-items-centers mb16">
                            <h1 className="fs-headline1 mr-auto">{blog.title}</h1>
                        </div>
                        <p className="mb24 f13 fw350"></p>
                    </div>

                    <div className="bg-white bar-sm bs-md p16 md-content w-100" style={{float: "left"}}>
                        
                        <ReactMarkdown source={blog.body} renderers={{ code: CodeBlock }} />
                        
                        {
                            blog.tags && blog.tags.map( (tag,i) => {
                                return <Tags key={i} name={tag.name}/>
                            })
                        }
                    </div>

                </div>
                <div id="sidebar">
                    <div className="s-sidebarwidget s-sidebarwidget__yellow mb16">
                        <div className="s-sidebarwidget--header d-flex align-items-center">
                            <span className="s-sidebarwidget--title">Blog</span>
                        </div>
                        <SidebarWidget />
                    </div>
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
                
                <div className="clear-fix"></div>
            </div>
        )
    }    
}

export default SingleBlog;


    