import React from "react";
import styles from "./favorites.modules.css";
import PropTypes from "prop-types";
import { Button } from "components/Button";

export class Favorites extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  state = {
    isFave: false,
  };

  handleFave = () => {
    this.setState({ isFave: !this.state.isFave }, () => {
      this.props.onClick(this.state.isFave);
    });
  };

  render() {
    const starSpan = !this.state.isFave ? (
      <Button
        buttonClass="cardButton"
        buttonText="star"
        onClick={this.handleFaved}
      />
    ) : (
      <Button
        buttonClass="cardButton"
        buttonText="star"
        onClick={this.handleFaved}
      />
    );

    return (
      <div className={styles.favorites}>
        <Button buttonClass="cardButton" buttonText="heart" type="button" />
        {starSpan}
      </div>
    );
  }
}
