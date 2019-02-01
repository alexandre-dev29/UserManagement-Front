import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MessageComponent extends Component {
  render() {
    if (this.props.message) {
      return (
        <main className="bg-mask">
          <div className="container">
            <div className="row">
              <div className="login-form  col-md-8 mx-auto">
                <div className="card-block">
                  <h1 className="text-center">{this.props.message}</h1>
                  {this.props.component}
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    } else {
    }
  }
}

export default withRouter(MessageComponent);
