import React, { Component } from "react";
import SignupForm from "./Forms/SignupForm";
import Message from "./MessageComponent";

export default class SignupComponent extends Component {
  isLoggedin() {
    if (localStorage.getItem("jumpcutUser")) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    if (this.isLoggedin()) {
      return (
        <Message message="You are already logged so please go to the main page" />
      );
    } else {
      return <SignupForm />;
    }
  }
}
