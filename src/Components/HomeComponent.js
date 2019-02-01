import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <Link to="/signin">Click</Link>
      </div>
    );
  }
}
