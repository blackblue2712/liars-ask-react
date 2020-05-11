import React from 'react';
import { withRouter, Switch, Route } from "react-router-dom";
import './style.css';
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import TagsComponent from './tags/TagsComponent';
import UsersComponent from './users/UsersComponent';
import Questions from './questions/Questions';
import Asks from './asks/Asks';
import EditQuestion from './asks/EditQuestion';
import Example from './asks/Example';
import UserDetail from './users/UserDetail';
import ViewUserDetail from './users/ViewUserDetail';
import Announcement from './announcements/announcements';
import AddAnnouncement from './announcements/AddAnnouncement';
import SingleAcm from './announcements/SingleAcm';
import Blogs from './blogs/Blogs';
import SingleBlog from './blogs/SingleBlogs';
import WriteBlog from './blogs/WriteBlog';
import EditBlog from './blogs/EditBlog';
import SinglePost from './questions/SingleQuestion'
import ImagesGallery from './images-gallery/ImagesGallery';
import PrivateRoute from '../PirvateRoute';
import NotFound from './components/NotFound';
import RequestUpgrade from './users/RequestUpgrade';
import ActiveUpgrade from './request/ActiveUpgrade';
import AdvanceSearch from './search/AdvanceSerach';
// import PrivateChat from './chats/PrivateChawt';


const RouteClient = props => {
    return <>
        <Header />
        <div className="container"
            style={{marginTop: "50px"}}
        >
            <LeftSidebar />
            <Switch>
                <Route exact path="/" component={Questions} />
                <Route exact path="/tags" component={TagsComponent} />
                <PrivateRoute exact path="/users" component={UsersComponent} />
                <PrivateRoute exact path="/users/:userId" component={ViewUserDetail} />
                <PrivateRoute exact path="/users/profile/:userId" component={UserDetail} />

                <Route exact path="/questions" component={Questions} />
                <PrivateRoute exact path="/questions/ask" component={Asks} />
                <PrivateRoute exact path="/questions/ask/example/howtowrite" component={Example} />
                <Route exact path="/questions/ask/:quesId" component={SinglePost} />
                <PrivateRoute exact path="/questions/ask/edit/:quesId" component={EditQuestion} />

                <PrivateRoute exact path="/announcements" component={Announcement} />
                <PrivateRoute exact path="/announcements/new" component={AddAnnouncement} />
                <PrivateRoute exact path="/announcements/:acmId" component={SingleAcm} />

                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blogs/write/new" component={WriteBlog} />
                <Route exact path="/blogs/:blogId" component={SingleBlog} />
                <PrivateRoute exact path="/blogs/edit/:blogId" component={EditBlog} />
                <PrivateRoute exact path="/images-gallery" component={ImagesGallery} />

                {/* <PrivateRoute exact path="/chats/chanels" component={PrivateChat} /> */}

                <PrivateRoute exact path="/upgrade-account" component={RequestUpgrade} />
                <PrivateRoute exact path="/upgrade-account/:activeCode" component={ActiveUpgrade} />

                <Route exact path="/advance/search" component={AdvanceSearch} />

                <Route component={NotFound} to="/404"/>
                <Route component={NotFound} />
            </Switch>
            {/* <Route component={Footer} /> */}
        </div>
        <Footer />
    </>
}

export default withRouter(RouteClient);