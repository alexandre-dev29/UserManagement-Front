import React, { Component } from "react";

export default class MessageComponent extends Component {
  render() {
    return (
      <main className="bg-mask">
        <div className="container">
          <div className="row">
            <div className="login-form  col-md-8 mx-auto">
              <div className="card-block">
                <h1 className="text-center">{this.props.message}</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
