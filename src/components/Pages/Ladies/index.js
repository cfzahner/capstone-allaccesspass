import React from "react";
import styles from "./Ladies.module.css";

export class Ladies extends React.Component {
  render() {
    return (
      <div>
        <figure className={styles.ladies}>
          <img
            src={
              "https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
            }
            alt="Candidate List"
          />
        </figure>
      </div>
    );
  }
}
