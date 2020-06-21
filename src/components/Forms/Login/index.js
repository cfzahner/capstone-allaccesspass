import React from "react";
import { Form } from "../Form";
import { Button } from "components/Button";
import styles from "./login.css";
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
    {
      inputType: "text",
      labelText: "User Nam",
    },
    {
      inputType: "password",
      labelText: "password",
    },
  ];

  handleRegistration = () => {
    const currentInputs = this.state.inputs;

    this.setState({
      buttonTexts: [...this.state.buttonTexts].reverse(),
      inputs:
        currentInputs.length > 2
          ? currentInputs.slice(0, 2)
          : currentInputs.concat(this.registrationInputs),
    });
  };

  render() {
    return (
      <form className={styles.form}>
        {this.renderInputs(this.inputs)}
        <Button />
        <Button buttonClass="plain" label="Register?" type="button" />
      </form>
    );
  }
}
