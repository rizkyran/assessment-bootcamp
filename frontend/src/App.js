// import logo from './logo.svg';
import './App.css';
import Landing from './pages/landing.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import SiteList from './pages/sitelist';
import CreatePassword from './pages/createpassword';
import AlterSite from './pages/updatepassword';
// import Navbar from './components/navbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/site">
          <SiteList />
        </Route>
        <Route path="/site/create">
          <CreatePassword/>
        </Route>
        <Route path="/site/update/:id">
          <AlterSite/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
