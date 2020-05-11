import React from 'react';
import { withRouter } from "react-router-dom";
import RouteClient from './client/RouteClient';
import RouteAuth from './client/AuthRoute';
import AsyncComponent from './AsyncComponent';

const AsyncAdmin = AsyncComponent(() => {
    return import('./admin/RouteAdmin');
})

class MainRouter extends React.Component {
    render() {
        let isAdminPage = this.props.location.pathname.split("/")[1];
        if(isAdminPage === "auth") {
            return <RouteAuth />
        } else if (isAdminPage === "admin"){
            return <AsyncAdmin />
        } else {
            return <RouteClient />
        }
    }
}

export default withRouter(MainRouter);