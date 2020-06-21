import React from "react";
import { authenticateUser } from "api";

import { Input } from "./Input";

export class Form extends React.Component {
  handleChange = (event) => {
    //dot notation(interpolation)
    this.setState({
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(this.processFormData(e.target, "st"));
  };

  processFormData = (formControls, datasetKey) =>
    // Convert to ARRAY and 'filter' only inputs with 'ids' (not 'button', etc.)
    Array.from(formControls)
      .filter(({ dataset }) => dataset[datasetKey])
      // 'map' and transform each 'input' into an OBJECT
      .map(({ dataset, value }) => ({ [dataset[datasetKey]]: value }))
      .reduce((accumulatedData, currentData) => ({
        ...accumulatedData,
        ...currentData,
      }));

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
