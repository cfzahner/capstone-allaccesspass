import React from "react";
import styles from "./about.module.css";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.mainAbout}>
        <main>
          <section>
            div<h1 className={styles.title}>About Us!</h1>
            <h2 className={styles.companies}>Who we work with?</h2>
            <p className={styles.pBody}>
              Here's a list of companies and organizations that we partner with
              for job placement and furthuring education.
            </p>
            <h2 className={styles.title2}>Why we are here for you?</h2>
            <p className={styles.message}>
              We're all in this together and need to support our fellow ladies.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
