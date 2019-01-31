import React, { Component } from "react";
import "./App.css";
import Login from "./Components/LoginComponent";
import Signup from "./Components/SignupComponent";
import FormReset from "./Components/ForgotPasswordComponent";
import PasswordReset from "./Components/PasswordRestComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Alexandree</p>
        <PasswordReset />
      </div>
    );
  }
}

export default App;
