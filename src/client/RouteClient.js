import React from 'react';
import { withRouter, Switch } from "react-router-dom";
import './style.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
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
                <PrivateRoute exact path="/" component={Questions} />
                <PrivateRoute exact path="/tags" component={TagsComponent} />
                <PrivateRoute exact path="/users" component={UsersComponent} />
                <PrivateRoute exact path="/users/:userId" component={ViewUserDetail} />
                <PrivateRoute exact path="/users/profile/:userId" component={UserDetail} />
                <PrivateRoute exact path="/questions" component={Questions} />
                <PrivateRoute exact path="/questions/ask" component={Asks} />
                <PrivateRoute exact path="/questions/ask/example/howtowrite" component={Example} />
                <PrivateRoute exact path="/questions/ask/:quesId" component={SinglePost} />
                <PrivateRoute exact path="/questions/ask/edit/:quesId" component={EditQuestion} />

                <PrivateRoute exact path="/announcements" component={Announcement} />
                <PrivateRoute exact path="/announcements/new" component={AddAnnouncement} />
                <PrivateRoute exact path="/announcements/:acmId" component={SingleAcm} />

                <PrivateRoute exact path="/blogs" component={Blogs} />
                <PrivateRoute exact path="/blogs/write/new" component={WriteBlog} />
                <PrivateRoute exact path="/blogs/:blogId" component={SingleBlog} />
                <PrivateRoute exact path="/blogs/edit/:blogId" component={EditBlog} />
                <PrivateRoute exact path="/images-gallery" component={ImagesGallery} />

                {/* <PrivateRoute exact path="/chats/chanels" component={PrivateChat} /> */}

                <PrivateRoute exact path="/upgrade-account" component={RequestUpgrade} />
                <PrivateRoute exact path="/upgrade-account/:activeCode" component={ActiveUpgrade} />

                <PrivateRoute exact path="/advance/serach" component={AdvanceSearch} />

                <PrivateRoute component={NotFound} to="/404"/>
                <PrivateRoute component={NotFound} />
            </Switch>
            {/* <Route component={Footer} /> */}
        </div>
        <Footer />
    </>
}

export default withRouter(RouteClient);