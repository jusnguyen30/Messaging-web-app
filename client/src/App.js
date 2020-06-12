import { React, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
