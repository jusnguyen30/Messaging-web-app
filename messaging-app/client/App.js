import { React, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Home from "./Home";
import Login from './pages/Login';
import Register from "./Register";
import Chat from "./Chat";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
