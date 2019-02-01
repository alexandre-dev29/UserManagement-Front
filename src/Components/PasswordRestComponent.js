import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { ApiCall } from "../Tools/ApiConfig";

class PasswordRestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetToken: "",
      password: "",
      retypepass: "",
      isAuth: false,
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
    const { resetToken, password } = this.state;
    ApiCall.put("password-reset", {
      user: { token: resetToken, password: password }
    }).then(res => {
      if (res.data.response === "success") {
        this.props.history("/signin");
      } else {
        console.log(res);
        this.setState({ message: res.data.message });
      }
    });
  }

  componentDidMount() {
    let token = "";
    if (!this.props.location.search.split("=")[1]) {
      token = this.props.location.search.split("=")[1];
      this.setState({ resetToken: token, isAuth: true });
    } else {
      this.setState({ isAuth: false });
    }
  }
  render() {
    const { isAuth, message } = this.state;
    if (!isAuth) {
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
                      <label htmlFor="retypepass">retype your password</label>
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
