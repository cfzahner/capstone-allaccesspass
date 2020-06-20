import React from "react";

export class SignUp extends React.Component {
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
