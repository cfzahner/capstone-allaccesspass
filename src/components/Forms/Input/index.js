import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";

import "./Input.css";

export class Input extends React.Component {
  static defaultProps = {
    type: "text",
    value: "value",
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
  };
handleChange = (event) => {

}
}
  // All attributes to be camelCased
  camelCaseLabel = camelCase(this.props.label);

  render() {
    return (
      <div>
        <label htmlFor={this.camelCaseLabel}>{this.props.label}</label>
        <input
          id={this.camelCaseLabel}
          type={this.props.type}
          placeholder={this.props.label}
          // TODO: Implement handleChange
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
