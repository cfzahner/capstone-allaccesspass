import React from "react";
import styles from "./reviews.module.css";

export class Reviews extends React.Component {
  render() {
    return (
      <main>
        <div className={styles.heroReview}>
          <section>
            <h2 className={styles.reviewTitle}>Reviews</h2>
            <h3 className={styles.headerReview}>Lets talk about reviews!</h3>

            <p className={styles.reviews}>
              Here, you can leave a review about a good or bad experience you
              had working with a production company.
            </p>
          </section>
        </div>
      </main>
    );
  }
}
