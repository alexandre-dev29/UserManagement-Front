import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//this component is used for printing message in the application
class MessageComponent extends Component {
  render() {
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
  }
}

export default withRouter(MessageComponent);
