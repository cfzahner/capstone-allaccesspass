import React from "react";

import { Button } from "components/Button";
import { Form } from "components/Forms/Form";

import axios from "axios";

import styles from "./Login.module.css";

export class Login extends Form {
  state = {
    buttonTexts: ["Login", "Register"],
    inputs: [
      {
        inputType: "text",
        labelText: "Username",
      },
      {
        inputType: "password",
        labelText: "Password",
      },
    ],
    isLoggedIn: false,
    loginAuth: [],
    password: "",
    username: "",
  };

  registrationInputs = [
    {
      inputType: "text",
      labelText: "Name",
    },
    {
      inputType: "email",
      labelText: "Email",
    },
  ];

  checkIsRegistration() {
    return this.state.inputs.length > 2;
  }

  getAuth = async () => {
    //async componentDidMount() {
    try {
      const auth = await axios("http://localhost:1000/api/auth/auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // this.setState({ loginAuth: [...this.state.loginAuth, auth.data] });
      console.log(auth.data);
    } catch (err) {
      console.error(err);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = this.checkIsRegistration() ? "/register" : "/login";

    const newUserData = this.checkIsRegistration()
      ? JSON.stringify({
          ...this.processFormData(e.target),
          ...{ faves: [] },
        })
      : JSON.stringify(this.processFormData(e.target));

    const res = await fetch(`http://localhost:1000/api/auth${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newUserData,
    });
  };

  handleButtonToggle = () => {
    const currentInputs = this.state.inputs;

    // 'length' determines whether registrationInputs included or not
    this.setState({
      buttonTexts: [...this.state.buttonTexts].reverse(),
      inputs: this.checkIsRegistration()
        ? currentInputs.slice(0, 2)
        : currentInputs.concat(this.registrationInputs),
    });
  };

  render() {
    this.getAuth();
    return (
      <form className={styles.form} onSubmit={this.handleSubmit} action="/home">
        {this.renderInputs(this.state.inputs)}
        <Button buttonText={this.state.buttonTexts[0]} type="submit" />
        <Button
          buttonClass="plain"
          buttonText={this.state.buttonTexts[1]}
          type="submit"
          onClick={this.handleButtonToggle}
        />
      </form>
    );
  }
}
