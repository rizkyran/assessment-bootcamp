import React from "react"
import './App.css'

import Landing from "./pages/landing";

import RegisterPage from "./pages/register"
import LoginPage from "./pages/login";
import TablePass from "./pages/pass";
import CreatePass from "./pages/createPass";
import UpdatePass from "./pages/updatePass";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import PrivateRoute from "./component/privateroute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>

        <PrivateRoute path="/site" component={TablePass} />
        <PrivateRoute path="/add-site" component={CreatePass} />
        <PrivateRoute path="/edit-site/:pass_id" component={UpdatePass} />

        {/* <Route path="/site">
          <TablePass/>
        </Route>
        <Route path="/add-site">
          <CreatePass/>
        </Route>
        <Route path="/edit-site/:pass_id">
          <UpdatePass/>
        </Route> */}

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
