import React from "react";
import { Form } from "../Form";
import { Button } from "components/Button";
import styles from "./login.css";
export class Login extends Form {
  state = {
    loggedIn: false,
    name: "",
    username: "",
    password: "",
    err: false,
  };

  inputs = [
    {
      inputType: "text",
      labelText: "Username",
    },
    {
      inputType: "password",
      labelText: "Password",
    },
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.processFormData(e.target, "st"));
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
