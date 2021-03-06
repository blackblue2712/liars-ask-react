import React from 'react';
import { Switch, Route } from "react-router-dom";
import Auth from './auth/Auth';
import ResetPassword from './auth/ResetPassword';

const RouteAuth = props => {
    return <>
        <Switch>
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/auth/reset-password/:resetCode" component={ResetPassword} />
        </Switch>
    </>
}

export default RouteAuth;