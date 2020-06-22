import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ buttonClass, buttonText, type, onClick }) => (
  <button type={type} className={buttonClass} onClick={onClick}>
    {buttonText}
  </button>
);
Button.defaultProps = {
  buttonClass: "success",
  buttonText: "Submit",
  type: "submit",
};
Button.propTypes = {
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
