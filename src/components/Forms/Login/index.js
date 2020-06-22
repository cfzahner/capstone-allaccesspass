import React from "react";

import { Button } from "components/Button";
import { Form } from "../Form";

import { getAllCandidates } from "api";

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

    const baseURL = "http://localhost:1000/api/candidates/candidates";

    const endpoint = this.checkIsRegistration()
      ? "/user/register"
      : "/user/login";

    const { status } = await getAllCandidates(baseURL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(this.processFormData(e.target)),
    });
    console.log(status);
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
      <form className={styles.form} onSubmit={this.handleSubmit}>
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
