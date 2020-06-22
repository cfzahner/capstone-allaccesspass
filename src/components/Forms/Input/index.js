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
    onChange: PropTypes.func, // handleChange method
    st: PropTypes.string, // "username"
    type: PropTypes.string,
  };

  // All attributes to be camelCased
  camelCaseLabel = camelCase(this.props.label);

  render() {
    return (
      <div>
        <input
          className="form-inputs"
          id={this.camelCaseLabel}
          type={this.props.type}
          placeholder={this.props.label}
          data-st={this.props.st || this.camelCaseLabel}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
