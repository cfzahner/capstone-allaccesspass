import PropTypes from "prop-types";
import React from "react";
import { Favorites } from "./Favorites";
import styles from "./Card.module.css";

export class Cards extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    yearsExperience: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired,
  };

  handleClick = async (isFaved) => {
    console.log(this.props.bio);
    const endpoint = isFaved ? "add" : "remove";

    const results = await fetch(
      `http://localhost:3001/api/users/user/faves/${endpoint}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: { username: "codefinity" },
          fave: this.props.id,
        }),
      }
    );
  };

  render() {
    return (
      <div className={styles.cardPhoto}>
        <ul className={styles.cards}>
          <li>{this.props.name}</li>
          <li>{this.props.location}</li>
          <li>{this.props.position}</li>
          <li>{this.props.yearsExperience}</li>
          <li>{this.props.bio}</li>
          <Favorites onClick={this.handleClick} />
        </ul>
      </div>
    );
  }
}
