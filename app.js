import React, { Fragment } from "react";

import { Login, Header, Main } from "./components";

export class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }

  render() {
    return (
      <Fragment>
        <Login />
        <Header />
        <Main />
      </Fragment>
    );
  }
}
