import React, { Fragment } from "react";

import { Login, Header, Main } from "./components";
import { Home } from "./src/components/Pages";
export class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  //function Greeting(props) {
  //  const isLoggedIn = props.isLoggedIn
  //  if(isLoggedIn) {
  //    return <UserGreeting />
  //  }
  //  return <GuestGreeting />
  //}

  render() {
    return (
      <Fragment>
        <Home />
        <Header />
        <Main />
      </Fragment>
    );
  }
}
