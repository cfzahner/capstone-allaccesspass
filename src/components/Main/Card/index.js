import React from "react";

import "font-awesome/css/font-awesome.min.css";

import { getAllCandidates } from "api";

export const Card = () => <section>Some Person</section>;


export class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      location: "",
      experience: "",
    }


    async componentDidMount() {
      try {
        this.setState(await getAllCandidates())
      } catch (error) {
        console.log(error)
      }
      }
    }


  render() {
    return ()
  }
}
