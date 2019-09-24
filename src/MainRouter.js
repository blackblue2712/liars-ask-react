import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import TagsComponent from './client/tags/TagsComponent';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path="/tags" component={TagsComponent} />
        </Switch>
    )
}

export default withRouter(MainRouter);