import React, { Component } from "react";
import Message from "./MessageComponent";
import { withRouter } from "react-router-dom";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
  }
  Logout() {
    localStorage.removeItem("jumpcutUser");
    this.props.history.push("/signin");
  }
  render() {
    const Logout = () => {
      return (
        <button className="btn btn-danger" onClick={this.Logout}>
          Logout
        </button>
      );
    };
    return (
      <div>
        <Message
          message="Welcome to you if you want to logout please click this button"
          component={<Logout />}
        />
      </div>
    );
  }
}

export default withRouter(HomeComponent);
