import React from "react";

export class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  handleChange(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            title="Name"
            placeholder="Name"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input
            type="text"
            title="Email"
            placeholder="Email"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            title="Username"
            placeholder="Username"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="password"
            title="Password"
            placeholder="Password"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
