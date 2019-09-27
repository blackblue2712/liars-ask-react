import React from 'react';
import { Switch, withRouter } from "react-router-dom";
import RouteClient from './client/RouteClient';
import RouteAdmin from './admin/RouteAdmin';

class MainRouter extends React.Component {
    render() {
        let isAdminPage = this.props.location.pathname.split("/")[1];
        return <Switch>
            <>
                {
                    isAdminPage === "admin" ? <RouteAdmin /> : <RouteClient />
                }
                
            </>
        </Switch>
    }
}

export default withRouter(MainRouter);