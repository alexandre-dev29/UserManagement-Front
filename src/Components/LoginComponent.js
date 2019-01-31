import React, { Component } from "react";

export default class LoginComponent extends Component {
  render() {
    return (
      <main className="bg-mask">
        <div className="container">
          <div className="row">
            <div className="login-form  col-md-5 mx-auto">
              <div className="card-block">
                <div className="text-center pb-4">
                  <h3 className="display-4 font-bold">
                    <i className="fa fa-lock" /> Login:
                  </h3>
                </div>

                <div className="md-form">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email">Your email</label>
                </div>

                <div className="md-form pb-1">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <label htmlFor="password">Your password</label>
                </div>

                <div className="text-center ">
                  <a
                    href="home.html"
                    className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                  >
                    Login
                  </a>
                </div>
                <div className="md-form mt-3">
                  <div className="row ">
                    <div className="col-md-6">
                      <p className="text-center">
                        Not a member?{" "}
                        <a className="cyan-text" href="signUp.html">
                          Sign Up
                        </a>
                      </p>
                    </div>
                    <div className="col-md-5">
                      <p className="text-center">
                        Forgot{" "}
                        <a className="cyan-text" href="reset.html">
                          Password?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
