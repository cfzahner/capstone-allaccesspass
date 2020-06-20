import React from "react";

import { Form } from "../Form";

export class SignUp extends Form {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  inputs = [
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
      labelText: "User Name khjkhjk",
    },
    {
      inputType: "password",
      labelText: "password",
    },
  ];

  handleSubmit(event) {
    alert("User submitted:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>{this.renderInputs(this.inputs)}</form>
    );
  }
}
