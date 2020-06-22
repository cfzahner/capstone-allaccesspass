import React from "react";
import styles from "./reviews.modules.css";

export class Reviews extends React.Component {
  render() {
    return (
      <div className={styles.h2}>
        <main>
          <section className="hero-home">
            <h2>Lets talk about reviews!</h2>

            <p>
              Here, you can leave a review about a good or bad experience you
              had working with a production company.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
