import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import './style.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import TagsComponent from './tags/TagsComponent';
import UsersComponent from './users/UsersComponent';
import QuestionsComponent from './questions/QuestionsComponent';

class Index extends React.Component {
    render() {
        return <Switch>
            <>
                <Header />
                <div className="container"
                    style={{marginTop: "50px"}}
                >
                    <LeftSidebar />
                    <Route exact path="/" component={Content} />
                    <Route exact path="/tags" component={TagsComponent} />
                    <Route exact path="/users" component={UsersComponent} />
                    <Route exact path="/questions" component={QuestionsComponent} />
                </div>
                <Footer />
            </>
        </Switch>
    }
}

export default withRouter(Index);