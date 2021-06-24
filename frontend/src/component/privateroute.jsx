import React from "react" 

import { Redirect, Route } from "react-router"

const PrivateRoute = props => {
    const accessToken = localStorage.getItem("access_token")

    return accessToken === null ? <Redirect to="/login"></Redirect> : <Route {...props}>{props.children}</Route>
};

export default PrivateRoute;