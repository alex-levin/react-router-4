import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../../services/authService';

/*
We are spreading remaining (other than component) JavaScript properties (path) across our custom router component PrivateRoute.
<PrivateRoute
    path="/private"
    component={ProtectedHome}
/>

<Component {...props} /> - ProtectedHome has an access to the Router's props.

<Redirect to={{ pathname: '/login' redirects to Login:
<Route path="/login" component={Login} />

Login:
const {target} = this.props.location.state || {target: {pathname: '/private'}};

target now holds router's props.location.

*/
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authService.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { target: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
