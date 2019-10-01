import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './controllers/userController';

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() && isAuthenticated().user.roles.permission === 7 ? (
                    <Component {...props} userPayload={isAuthenticated()} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/auth",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRouteAdmin;