import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute ({component: Component, ...rest}) {
    <Route {...rest} render={props => {
        const currentUser = localStorage.user;
        if (!currentUser) {
            // Will need to redirect based on whether it's a user to a rec center
            return <Redirect to={{ pathname: 'user/login', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
}

export default PrivateRoute;