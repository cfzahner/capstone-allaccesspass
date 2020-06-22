import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.css";
const links = ["Home", "About", "Events", "Reviews"];

const createLinks = () => {
  return links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={"/" + link.toLowerCase()} activeClassName="isActiveLink">
          {link}
        </NavLink>
      </li>
    );
  });
};

export const Navigation = () => (
  <nav>
    <ul>{createLinks()}</ul>
  </nav>
);

//export class Navigation extends React.Component {
//  render() {
//    return (
//      <nav className="Nav">
//        <ul>
//          <Link to="/">
//            <li>Home</li>
//          </Link>
//
//          <Link to="/about">
//            <li>About Us</li>
//          </Link>
//
//          <Link to="/events">
//            <li>Events</li>
//          </Link>
//
//          <Link to="/reviews">
//            <li>Reviews</li>
//          </Link>
//        </ul>
//      </nav>
//    );
//  }
//}
//const createLinks = () => {
//  return links.map((link) => {
