import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Header from "./components/header";
  <React.StrictMode>
    <App />
  </React.StrictMode>,
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/home" component={home} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
