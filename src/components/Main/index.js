import React from "react";
import { Card } from "card";

import { getAllCandidates } from "api";

export class App extends React.Component {
  state = {
    candidates: [],
  };

  renderCards = () =>
    this.state.candidates.map(
      ({ name, location, position, experience, picture, bio }, index) => (
        <Card
          name={name}
          location={location}
          position={position}
          experience={experience}
          picture={picture}
          bio={bio}
          key={index}
        />
      )
    );

  async componentDidMount() {
    const { results } = await getAllCandidates();
    this.setState({ candidates: results });
    console.log("hello", this.state);
  }

  render() {
    return <main className="App">{this.renderCards()}</main>;
  }
}

// export class Main extends React {
//  state = {
//    candidates: [],
//  };
//
//  async componentDidMount() {
//    this.setState(
//      { candidates: await  }
//    )
//  }
//}
