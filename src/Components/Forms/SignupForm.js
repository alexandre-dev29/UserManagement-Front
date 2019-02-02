import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ApiCall } from "../../Tools/ApiConfig";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      havesignup: false, //if he has send the request
      message: "",
      isMatch: true,
      isPasswordGood: true,
      isButtonDisable: false,
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //loading states
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm
    } = this.state;

    //check if the two password input match
    if (password !== passwordConfirm) {
      this.setState({ isMatch: false });
    } else if (password.length < 6) {
      this.setState({ isPasswordGood: false });
    } else {
      this.setState({
        isPasswordGood: true,
        isButtonDisable: true,
        loading: true
      });

      //send a signup request
      ApiCall.post("/signup", {
        user: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
      }).then(res => {
        if (res.data.response === "success") {
          this.setState({ message: res.data.message, havesignup: true });
        } else {
          this.setState({
            message: res.data.message,
            isButtonDisable: false,
            loading: false
          });
        }
      });
    }
  }

  render() {
    //loading needed state
    const {
      message,
      havesignup,
      isMatch,
      isPasswordGood,
      isButtonDisable
    } = this.state;

    //style for the loader
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    //check if he has send the request
    if (!havesignup) {
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
                    <div>
                      <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={35}
                        color={"#123abc"}
                        loading={this.state.loading}
                      />
                    </div>
                    <p className="text-danger">{message}</p>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="md-form">
                      <div className="row">
                        <div className="col-md-6 mt-3">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                          />
                          <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="col-md-6 mt-3">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                          />
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="md-form ">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange}
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="md-form  mt-3">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                      {isPasswordGood ? (
                        ""
                      ) : (
                        <span className="text-danger">
                          password must have at least 6 caracters
                        </span>
                      )}
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="md-form  mt-3">
                      <input
                        type="password"
                        id="passwordConfirm"
                        className="form-control"
                        name="passwordConfirm"
                        onChange={this.handleChange}
                      />
                      {isMatch ? (
                        ""
                      ) : (
                        <span className="text-danger">
                          password don't match
                        </span>
                      )}
                      <label htmlFor="passwordConfirm">Confirm Password</label>
                    </div>

                    <div className="text-center ">
                      <button
                        type="submit"
                        className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                        disabled={isButtonDisable}
                      >
                        Signup
                      </button>
                    </div>
                  </form>
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
    } else {
      return (
        <main className="bg-mask">
          <div className="container">
            <div className="row">
              <div className="login-form  col-md-8 mx-auto">
                <div className="card-block">
                  <h1 className="text-center">{message}</h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}

export default withRouter(SignupForm);
