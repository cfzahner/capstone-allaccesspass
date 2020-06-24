import React from "react";

import { Button } from "components/Button";
import { Form } from "components/Forms/Form";

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
    const res = await fetch(`http://localhost:1000/api/employers${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newUserData,
    });

    // TODO{courtney.zahner}: Add some routing to send user to the right page IF res.status === 200
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
    return (
      <form className={styles.form} onSubmit={this.handleSubmit} action="/home">
        {this.renderInputs(this.state.inputs)}
        <Button buttonText={this.state.buttonTexts[0]} />
        <Button
          buttonClass="plain"
          buttonText={this.state.buttonTexts[1]}
          type="button"
          onClick={this.handleButtonToggle}
        />
      </form>
    );
  }
}
