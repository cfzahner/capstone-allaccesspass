import React from "react";

import Input from "./Input";

export class Form extends React.Component {
  // TODO{manav.misra}: Use 'Context' or just 'proxy trickery' to 'handleChange'

  renderInputs = (inputs) =>
    // Each type of form will have an Array of Objects with the desired input props
    inputs.map(({ labelText, inputType }) => (
      <Input label={labelText} type={inputType} key={labelText} />
    ));

  render() {
    return (
      <Form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}