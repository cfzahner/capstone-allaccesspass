import React from "react";
import { Link } from "react-router-dom";

import "./navigation.css";

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About Us</li>
          </Link>

          <Link to="/events">
            <li>Events</li>
          </Link>

          <Link to="/reviews">
            <li>Reviews</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
