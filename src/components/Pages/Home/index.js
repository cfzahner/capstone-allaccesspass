import React from "react";

import axios from "axios";

import styles from "./Home.module.css";

export class Home extends React.Component {
  // NO NEED TO USE 'constructor' 📢 - state fields
  state = {
    candidates: [],
    // Should start as 'false'
    isToggleOn: false,
  };

  // Bind 'this' lexically to Class with arrow syntax
  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  async componentDidMount() {
    try {
      const candidates = await axios({
        method: "GET",
        url: "http://localhost:1000/api/candidates/candidates",
      });

      // 'axios' processes JSON in the response and adds it to 'data
      this.setState({ candidates: candidates.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <a className="header-button-a" href="/profile">
          Create a Profile
        </a>

        <div>
          <main>
            <section className={styles.hero}>
              <h2 className={styles.h2}>Lets Talk...</h2>

              <p className={styles.p}>
                It’s a misrepresentation of our own identity, as we have a
                society where 50% of the population are women,” says Vanessa
                Reed, CEO of the PRS for Music Foundation, a leading music
                charity. “If you’re underrepresented in an industry, you’re
                going to feel like you have less reason to put yourself forward
                or less chance of getting support. You need to see it if you’re
                going to be it,” she says.
              </p>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
