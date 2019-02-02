import React, { Component } from "react";
import { ApiCall } from "../Tools/ApiConfig";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";

//send a resquest for password changes to the server
export default class FormResetComponent extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      email: "",
      message: "",
      haveSend: false, //if he has send the request
      isLoading: false,
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true, disabled: true });
    const { email } = this.state;
    console.log("send");
    ApiCall.post("/password-reset", { user: { email: email } })
      .then(res => {
        if (res.data.response === "success") {
          this.setState({ isLoading: false, disabled: false });
          this.setState({ message: res.data.message, haveSend: true });
        } else {
          this.setState({ isLoading: false, disabled: false });
          this.setState({ message: res.data.message });
        }
      })
      .catch(res => console.log(res));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { message, haveSend, disabled } = this.state;
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    if (!haveSend) {
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
                    <ClipLoader
                      css={override}
                      sizeUnit={"px"}
                      size={35}
                      color={"#123abc"}
                      loading={this.state.isLoading}
                    />
                    <h3 className="text-danger">{message}</h3>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="md-form offset-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control col-8"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="email">Your email</label>
                    </div>

                    <div className="text-center ">
                      <button
                        type="submit"
                        className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
                        disabled={disabled}
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
