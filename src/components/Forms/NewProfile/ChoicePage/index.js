import React from "react";
import styles from "./ChoicePage.modules.css";

export class ChoicePage extends React.Component {
  render() {
    return (
      <main>
        <section className={styles.choiceMessage}>
          <h2>
            Are you a talented woman or a successful company? Please choose a
            form option.
          </h2>
          <div>
            <button>
              <a href="/createF-Profile" className={styles.choiceButton}>
                Candidate
              </a>
            </button>
            <button>
              <a href="/createC-Profile" className={styles.choiceButton}>
                Employer
              </a>
            </button>
          </div>
        </section>
      </main>
    );
  }
}
