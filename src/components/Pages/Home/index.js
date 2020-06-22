import React from "react";
import { Header } from "components/Header";
import { styles } from "./home.css";
export class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <section className="hero-home">
            <h2>Lets Talk...</h2>

            <p>
              It’s a misrepresentation of our own identity, as we have a society
              where 50% of the population are women,” says Vanessa Reed, CEO of
              the PRS for Music Foundation, a leading music charity. “If you’re
              underrepresented in an industry, you’re going to feel like you
              have less reason to put yourself forward or less chance of getting
              support. You need to see it if you’re going to be it,” she says.
            </p>
            <button className="home-button">Create Profile</button>
            <button className="home-button">Browse Candidates</button>
            <button className="home-button">Browse Companies</button>
          </section>
        </main>
      </div>
    );
  }
}
