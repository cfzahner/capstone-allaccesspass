import React from "react";
import { Form } from "../Form";
import { Button } from "components/Button";
import styles from "./login.css";
export class Login extends Form {
  state = {
  constructor(props) {
    super(props);
    this.state = {
    loggedIn: false,
    name: "",
    username: "",
    password: "",
    err: false,
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { username, password } = this.state;
    if (username === "test" && password === "test") {
      this.setState({ loggedIn: "true" });
      localStorage.setItem("loggedin", true);
    } else {
      this.setState({ err: "Error, please check username and password" });
    }
  };

  render() {
    return localStorage.getItem("loggedin") === "true" ? (
      <div className="main-login">
        <form>
          <input
            type="text"
            title="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            title="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            submit
          </button>
        </form>
        <p>
          Or Create <a href="/signup">Account</a>
        </p>
      </div>
    ) : (
      <div>logged in</div>
    );
  }
}
