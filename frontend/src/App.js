import logo from './logo.svg';
import './App.css';
import Landing from './pages/landing.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
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
        <Route path="/user/site">
          {/* <TablePass/> */}
        </Route>
        <Route path="/user/site/add">
          {/* <CreatePass/> */}
        </Route>
        <Route path="/user/site/:id">
          {/* <UpdatePass/> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
