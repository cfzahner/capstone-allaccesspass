import React from "react";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    );
  }
}
