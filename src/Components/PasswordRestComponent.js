import React, { Component } from "react";

export default class PasswordRestComponent extends Component {
  render() {
    return (
      <main className="bg-mask">
        <div className="container">
          <div className="row">
            <div className="login-form  col-md-5 mx-auto">
              <div className="card-block">
                <div className="text-center pb-4">
                  <h3 className="display-4 font-bold">
                    <i className="fa fa-lock" /> Reset Your Password:
                  </h3>
                </div>

                <div className="md-form">
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <label htmlFor="password">Your password</label>
                </div>

                <div className="md-form pb-1">
                  <input
                    type="password"
                    id="retypepass"
                    name="retypepass"
                    className="form-control"
                  />
                  <label htmlFor="retypepass">retype your password</label>
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
