import React from 'react';
import { withRouter } from "react-router-dom";
import RouteClient from './client/RouteClient';
import RouteAdmin from './admin/RouteAdmin';
import RouteAuth from './client/AuthRoute';

class MainRouter extends React.Component {
    render() {
        let isAdminPage = this.props.location.pathname.split("/")[1];
        if(isAdminPage === "auth") {
            return <RouteAuth />
        } else if (isAdminPage === "admin"){
            return <RouteAdmin />
        } else {
            return <RouteClient />
        }
    }
}

export default withRouter(MainRouter);