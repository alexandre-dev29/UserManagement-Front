import React, { Component } from "react";

import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginComponent";
import Home from "./Components/HomeComponent";
import Signup from "./Components/SignupComponent";
import PasswordReset from "./Components/PasswordRestComponent";
import ForgotPassword from "./Components/ForgotPasswordComponent";
import Message from "./Components/MessageComponent";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("jumpcutUser") ? (
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
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/messages" component={Message} />
        </div>
      </Router>
    );
  }
}

export default Routing;
