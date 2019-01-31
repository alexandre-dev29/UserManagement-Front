import React, { Component } from "react";

export default class FormResetComponent extends Component {
  render() {
    return (
      <main className="bg-mask">
        <div className="container">
          <div className="row">
            <div className="login-form  col-md-8 mx-auto">
              <div className="card-block">
                <div className="text-center pb-5">
                  <h3 className="display-4 font-bold">
                    <i className="fa fa-lock" /> Password Reset:
                  </h3>
                </div>

                <div className="md-form offset-3">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control col-8"
                  />
                  <label htmlFor="email">Your email</label>
                </div>

                <div className="text-center ">
                  <a
                    href="home.html"
                    className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                  >
                    Reset
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
