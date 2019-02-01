import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignupComponent extends Component {
  render() {
    return (
      <main className="bg-mask-3">
        <div className="container">
          <div className="row">
            <div className="login-form  col-md-5 mx-auto">
              <div className="card-block">
                <div className="text-center pb-0">
                  <h3 className="display-4 font-bold">
                    <i className="fa fa-lock text-primary" /> Signup:
                  </h3>
                </div>

                <div className="md-form">
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                      />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="col-md-6 mt-3">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                      />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </div>
                </div>
                <div className="md-form ">
                  <input
                    type="password"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="md-form  mt-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="md-form  mt-3">
                  <input
                    type="password"
                    id="passwordConfirm"
                    className="form-control"
                  />
                  <label htmlFor="passwordConfirm">Confirm Password</label>
                </div>

                <div className="text-center ">
                  <a
                    href="home.html"
                    className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                  >
                    Signup
                  </a>
                </div>
                <div className="md-form mt-2">
                  <div className="row ">
                    <div className="col-md-12 text-center">
                      <p>
                        Already have an account ?{" "}
                        <Link className="deep-orange-text" to="/signin">
                          Login here
                        </Link>
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
