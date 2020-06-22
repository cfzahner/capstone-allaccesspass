import React from "react";
import { Hero } from "components/Main/Hero";
import { Header } from "components/Header";
export class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="hero">
          <Hero />
          <Header />
        </div>
      </main>
    );
  }
}
