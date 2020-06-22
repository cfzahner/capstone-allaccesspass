import React from "react";
import { Card } from "./Card";
import { Login } from "../Forms";

import { getAllCandidates } from "api";

export class Main extends React.Component {
  state = {
    candidates: [],
  };

  renderCards = () =>
    this.state.candidates.map(
      ({ name, location, position, yearsExperience, bio }, index) => (
        <Card
          bio={bio}
          location={location}
          name={name}
          position={position}
          yearsExperience={yearsExperience}
          key={index}
        />
      )
    );

  async componentDidMount() {
    this.setState({ candidates: await getAllCandidates() });
  }

  render() {
    return (
      <main className="App">
        <Login />
        {this.renderCards()}
      </main>
    );
  }
}
