import React from "react";
import styles from "./Companies.module.css";

export class Companies extends React.Component {
  render() {
    return (
      <div>
        <figure className={styles.companies}>
          <img
            src={
              "https://images.unsplash.com/photo-1584466990376-09422a2b033a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            }
            alt="Company List"
          />
        </figure>
      </div>
    );
  }
}
