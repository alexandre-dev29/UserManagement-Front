import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { ApiCall } from "../Tools/ApiConfig";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    ApiCall.post("/login", { user: { email: email, password: password } }).then(
      res => {
        if (res.data.response === "success") {
          localStorage.setItem("jumpcutUser", JSON.stringify(res.data.user));
          this.props.history.push("/");
        } else {
          this.setState({ message: res.data.message });
        }
      }
    );
  }

  render() {
    const { message } = this.state;
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
