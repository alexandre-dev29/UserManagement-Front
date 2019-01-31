import React, { Component } from "react";

import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginComponent";
import Home from "./Components/HomeComponent";
import Signup from "./Components/SignupComponent";
import PasswordReset from "./Components/PasswordRestComponent";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);
class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={LoginForm} />
          <Route path="/password_reset" component={PasswordReset} />
        </div>
      </Router>
    );
  }
}

export default Routing;
