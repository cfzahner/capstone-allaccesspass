import React from "react";
import { styles } from "./Hero.css";
import "bulma/css/bulma.css";
export class Hero extends React.Component {
  // add event handler for button

  render() {
    return (
      //hero image example
      <div className="hero-image">
        <section>
          <h2>Lets Talk...</h2>

          <p>
            It’s a misrepresentation of our own identity, as we have a society
            where 50% of the population are women,” says Vanessa Reed, CEO of
            the PRS for Music Foundation, a leading music charity. “If you’re
            underrepresented in an industry, you’re going to feel like you have
            less reason to put yourself forward or less chance of getting
            support. You need to see it if you’re going to be it,” she says.
          </p>
        </section>
        <button className="hero-button">Create Profile</button>
        <button className="hero-button">Browse Candidates</button>
        <button className="hero-button">Browse Companies</button>
      </div>
    );
  }
}
