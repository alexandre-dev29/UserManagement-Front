import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ApiCall } from "../../Tools/ApiConfig";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      havesignup: false,
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
    const { firstName, lastName, email, password } = this.state;
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
        this.setState({ message: res.data.message });
      }
    });
  }

  render() {
    const { message, havesignup } = this.state;
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
                    <h3 className="text-danger">{message}</h3>
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
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="md-form  mt-3">
                      <input
                        type="password"
                        id="passwordConfirm"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="passwordConfirm">Confirm Password</label>
                    </div>

                    <div className="text-center ">
                      <button
                        type="submit"
                        className="btn btn-login  light-blue accent-4 z-depth-0 btn-rounded waves-effect"
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
