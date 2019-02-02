import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import SignUp from "./Components/SignupComponent";
import Login from "./Components/LoginComponent";
import Message from "./Components/MessageComponent";
import Home from "./Components/HomeComponent";
import PasswordReset from "./Components/PasswordRestComponent";
import ForgotPassword from "./Components/ForgotPasswordComponent";

describe("testing all component rendering", () => {
  it("renders <App /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders <SignUp /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <SignUp />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders <Login /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Login />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders <Message /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Message />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders <Home /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Home />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders <PasswordReset /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <PasswordReset />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders <ForgotPassword /> without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ForgotPassword />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
