import PropTypes from "prop-types";
import React from "react";

export class Card extends React.Component {
  static propTypes = {
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    yearsExperiences: PropTypes.number.isRequired,
  };

  render() {
    return (
      <ul>
        <li>this.props.name</li>
        <li>this.props.location</li>
        <li>this.props.position</li>
        <li>this.props.yearsExperience</li>
      </ul>
    );
  }
}
