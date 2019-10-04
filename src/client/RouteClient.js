import React from 'react';
import { withRouter } from "react-router-dom";
import './style.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import TagsComponent from './tags/TagsComponent';
import UsersComponent from './users/UsersComponent';
import Questions from './questions/Questions';
import Asks from './asks/Asks';
import Example from './asks/Example';
import UserDetail from './users/UserDetail';
import Announcement from './announcements/announcements';
import SingleAcm from './announcements/SingleAcm';
import Blogs from './blogs/Blogs';
import SingleBlog from './blogs/SingleBlogs';
import SinglePost from './questions/SingleQuestion'

import PrivateRoute from '../PirvateRoute';

const RouteClient = props => {
    return <>
        <Header />
        <div className="container"
            style={{marginTop: "50px"}}
        >
            <LeftSidebar />
            <PrivateRoute exact path="/" component={Questions} />
            <PrivateRoute exact path="/tags" component={TagsComponent} />
            <PrivateRoute exact path="/users" component={UsersComponent} />
            <PrivateRoute exact path="/users/:userId" component={UserDetail} />
            <PrivateRoute exact path="/questions" component={Questions} />
            <PrivateRoute exact path="/questions/ask" component={Asks} />
            <PrivateRoute exact path="/questions/ask/:quesId" component={SinglePost} />
            <PrivateRoute exact path="/questions/ask/example" component={Example} />

            <PrivateRoute exact path="/announcements" component={Announcement} />
            <PrivateRoute exact path="/announcements/:acmId" component={SingleAcm} />
            <PrivateRoute exact path="/blogs" component={Blogs} />
            <PrivateRoute exact path="/blogs/:blogId" component={SingleBlog} />

            {/* <Route component={Footer} /> */}
        </div>
        <Footer />
    </>
}

export default withRouter(RouteClient);