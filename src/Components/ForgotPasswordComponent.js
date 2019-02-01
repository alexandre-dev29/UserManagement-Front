import React, { Component } from "react";
import { ApiCall } from "../Tools/ApiConfig";

export default class FormResetComponent extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      email: "",
      message: "",
      haveSend: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    console.log("send");
    ApiCall.post("/password-reset", { user: { email: email } })
      .then(res => {
        if (res.response === "success") {
          this.setState({ message: res.data.message, haveSend: true });
        } else {
          this.setState({ message: res.data.message });
        }
      })
      .catch(res => console.log(res));
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { message, haveSend } = this.state;
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
