import React, { Fragment } from "react";

import { Login, Header, Main } from "./components";

export class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <Fragment>
        {/* TODO: https://reactjs.org/docs/conditional-rendering.html */}
        <Login />
        <Header />
        <Main />
      </Fragment>
    );
  }
}
