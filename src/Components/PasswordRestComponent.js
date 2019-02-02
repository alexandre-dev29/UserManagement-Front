import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { ApiCall } from "../Tools/ApiConfig";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

/**
 * this component create a form for the passord reset
 * and the send a call for changing the user password
 */
class PasswordRestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetToken: "",
      password: "",
      retypepass: "",
      isAuth: false,
      message: "",
      isLoading: false,
      isDisabled: false,
      isMatch: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handle changes of inputs
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //handle submit of the form
  handleSubmit(event) {
    event.preventDefault();
    const { resetToken, password, retypepass } = this.state;
    if (password !== retypepass) {
      this.setState({ isMatch: false });
    } else {
      this.setState({ isLoading: true, isDisabled: true, isMatch: true });
      ApiCall.put("password-reset", {
        user: { token: resetToken, password: password }
      }).then(res => {
        if (res.data.response === "success") {
          this.props.history.push("/signin");
        } else {
          this.setState({
            message: res.data.message,
            isLoading: true,
            disabled: false
          });
        }
      });
    }
  }

  //it just get the token reset and put it in a state
  componentDidMount() {
    if (this.props.location.search.split("=")[1]) {
      let token = this.props.location.search.split("=")[1];
      this.setState({ resetToken: token, isAuth: true });
    } else {
      this.setState({ isAuth: false });
    }
  }

  render() {
    const { isAuth, message, isDisabled, isLoading, isMatch } = this.state;
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    if (isAuth) {
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
                    <ClipLoader
                      css={override}
                      sizeUnit={"px"}
                      size={35}
                      color={"#123abc"}
                      loading={isLoading}
                    />
                    <h4 className="text-info text-center">{message}</h4>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="md-form">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="password">Your password</label>
                    </div>

                    <div className="md-form pb-1">
                      <input
                        type="password"
                        id="retypepass"
                        name="retypepass"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                      {isMatch ? (
                        ""
                      ) : (
                        <span className="text-danger">
                          password don't match
                        </span>
                      )}
                      <label htmlFor="retypepass">retype your password</label>
                    </div>
                    <div className="text-center ">
                      <button
                        disabled={isDisabled}
                        type="submit"
                        className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
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
              <div className="login-form col-md-10 mx-auto">
                <div className="card-block">
                  <h1 className="text-center">
                    you can't acces to this page if you want to reset your
                    password please go to this link
                  </h1>
                  <div className="offset-lg-5 mt-4">
                    <Link to="/forgotPassword" className="btn btn-primary">
                      Forgot Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}
export default withRouter(PasswordRestComponent);
