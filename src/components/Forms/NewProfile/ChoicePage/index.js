import React from "react";
import styles from "./ChoicePage.module.css";

export class ChoicePage extends React.Component {
  render() {
    return (
      <main className={styles.containerChoice}>
        <section className={styles.choiceHero}></section>
        <section className={styles.choiceMessage}>
          <h2>
            Are you a talented woman or a successful company? Please choose a
            form option.
          </h2>
          <div>
            <button>
              <a href="/createF-Profile">Candidate</a>
            </button>
            <button>
              <a href="/createC-Profile">Employer</a>
            </button>
          </div>
        </section>
      </main>
    );
  }
}
