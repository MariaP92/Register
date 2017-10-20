import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


const Form = () =>
{
  return(
    <form className="form-horizontal" method="post" action="#">
      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
          Your Name
        </label>
        <div className="cols-sm-10">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="cols-sm-2 control-label">
          Your Email
        </label>
        <div className="cols-sm-10">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-envelope fa" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="username" className="cols-sm-2 control-label">
          Username
        </label>
        <div className="cols-sm-10">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-users fa" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter your Username"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password" className="cols-sm-2 control-label">
          Password
        </label>
        <div className="cols-sm-10">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock fa-lg" aria-hidden="true" />
            </span>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="confirm" className="cols-sm-2 control-label">
          Confirm Password
        </label>
        <div className="cols-sm-10">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock fa-lg" aria-hidden="true" />
            </span>
            <input
              type="password"
              className="form-control"
              name="confirm"
              id="confirm"
              placeholder="Confirm your Password"
            />
          </div>
        </div>
      </div>
      <div className="form-group ">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block login-button"
        >
          Register
        </button>
      </div>
      <div className="login-register">
        <a href="index.php">Login</a>
      </div>
    </form>
  );
};

class App extends Component {
  render() {
    return (
      <body>
        <div className="container">
          <div className="row main">
            <div className="panel-heading">
              <div className="panel-title text-center">
                <h1 className="title">Company Name</h1>
                <hr />
              </div>
            </div>
            <div className="main-login main-center">
              <Form />
            </div>
          </div>
        </div>

        <script type="text/javascript" src="assets/js/bootstrap.js" />
      </body>
    );
  }
}

export default App;
