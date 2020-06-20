import React from "react";

import Input from "./Input";

export class Form extends React.Component {
  handleChange = (event) => {
    //dot notation(interpolation)
    this.setState({ [event.target.value]: "value" });
  };

  renderInputs = (inputs) =>
    // Each type of form will have an Array of Objects with the desired input props
    inputs.map(({ labelText, inputType }) => (
      <Input
        label={labelText}
        type={inputType}
        key={labelText}
        onChange={this.handleChange}
      />
    ));
}
