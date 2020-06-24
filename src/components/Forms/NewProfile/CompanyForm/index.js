import React from "react";

export class CompanyForm extends React.Component {
  state = {
    companyName: "",
    location: "",
    address: "",
    telephone: "",
    departments: "",
    positions: "",
    mission: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A user was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <main>
        <section>
          <h2>employer form</h2>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Company Name"
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Location"
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Address"
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Telephone"
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Departments"
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Positions seeking to fulfill"
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Mission statement"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}
