import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById("root")
//);
