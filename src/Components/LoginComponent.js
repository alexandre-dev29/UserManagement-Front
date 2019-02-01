import React, { Component } from "react";
import LoginForm from "./Forms/LoginForm";
import Message from "./MessageComponent";

export default class LoginComponent extends Component {
  isLogged() {
    if (localStorage.getItem("jumpcutUser")) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.isLogged()) {
      return <Message message="You are already signin go to the main page" />;
    } else {
      return <LoginForm />;
    }
  }
}
