import React, { Component } from "react";

export default class LoginComponent extends Component {
  render() {
    return (
      <main class="bg-mask">
        <div class="container">
          <div class="row">
            <div class="login-form  col-md-5 mx-auto">
              <div class="card-block">
                <div class="text-center pb-4">
                  <h3 class="display-4 font-bold">
                    <i class="fa fa-lock" /> Login:
                  </h3>
                </div>

                <div class="md-form">
                  <input type="text" id="form2" class="form-control" />
                  <label for="form2">Your email</label>
                </div>

                <div class="md-form pb-1">
                  <input type="password" id="form4" class="form-control" />
                  <label for="form4">Your password</label>
                </div>

                <div class="text-center ">
                  <a
                    href="home.html"
                    class="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                  >
                    Login
                  </a>
                </div>
                <div class="md-form mt-3">
                  <div class="row ">
                    <div class="col-md-6">
                      <p class="text-center">
                        Not a member?{" "}
                        <a class="cyan-text" href="signUp.html">
                          Sign Up
                        </a>
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p class="text-center">
                        Forgot{" "}
                        <a class="cyan-text" href="reset.html">
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
