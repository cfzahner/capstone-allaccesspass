import React from "react";
import styles from "./events.module.css";

export class Events extends React.Component {
  render() {
    return (
      <div className={styles.topHero}>
        <main>
          <section>
            div<h1 className={styles.eventTitle}>Events</h1>
            <h2 className={styles.h2Message}>
              Lets talk about webinars, shadowing and education opportunities
            </h2>
            <p className={styles.events}>All the Events!</p>
          </section>
        </main>
      </div>
    );
  }
}
