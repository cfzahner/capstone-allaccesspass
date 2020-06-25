import React from "react";
import styles from "./CompanyForm.module.css";
export class CompanyForm extends React.Component {
  state = {
    companyName: "",
    location: "",
    address: "",
    telephone: "",
    departments: "",
    positions: "",
    mission: "",
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  // handleSubmit = (event) => {
  //   alert("A user was submitted: " + this.state.value);
  //   event.preventDefault();
  // };
  handleFormSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/thankyou";
  };

  render() {
    return (
      <main>
        <section className={styles.formTitle}>
          <h2>Employer Form</h2>
        </section>
        <form className={styles.formInput} onSubmit={this.handleSubmit}>
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
          <input
            className={styles.formButton}
            type="submit"
            value="Submit"
            onClick={this.handleFormSubmit}
          />
        </form>
      </main>
    );
  }
}
