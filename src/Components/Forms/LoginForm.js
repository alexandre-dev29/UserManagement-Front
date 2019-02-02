import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ApiCall } from "../../Tools/ApiConfig";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      message: "",
      isLoading: false,
      isDisabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true, isDisabled: true });
    const { email, password } = this.state;
    ApiCall.post("/login", { user: { email: email, password: password } }).then(
      res => {
        if (res.data.response === "success") {
          localStorage.setItem("jumpcutUser", JSON.stringify(res.data.user));
          this.props.history.push("/");
        } else {
          this.setState({ isLoading: false, isDisabled: false });
          this.setState({ message: res.data.message });
        }
      }
    );
  }

  render() {
    const { message, isDisabled } = this.state;
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
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
                  <div>
                    <ClipLoader
                      css={override}
                      sizeUnit={"px"}
                      size={35}
                      color={"#123abc"}
                      loading={this.state.isLoading}
                    />
                  </div>
                  <h3 className="text-danger">{message}</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="md-form">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Your email</label>
                  </div>

                  <div className="md-form pb-1">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Your password</label>
                  </div>

                  <div className="text-center ">
                    <button
                      disabled={isDisabled}
                      type="submit"
                      className="btn btn-login btn-rounded  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="md-form mt-3">
                  <div className="row ">
                    <div className="col-md-6">
                      <p className="text-center">
                        Not a member?{" "}
                        <Link className="cyan-text" to="/signup">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-5">
                      <p className="text-center">
                        Forgot{" "}
                        <Link className="cyan-text" to="/forgotPassword">
                          Password?
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

export default withRouter(LoginForm);
