import React from "react";
import styles from "./ThankYou.module.css";

export class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <figure className={styles.puppy}>
          <img
            src={
              "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            }
            alt="Thank you for submitting"
          />
        </figure>
      </div>
    );
  }
}
