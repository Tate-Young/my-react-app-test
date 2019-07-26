import React, { Component } from "react";
import { withContent } from "../common";

// export class About extends Component {
//   state = {
//     content: "Loading…"
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//       .then(data => this.setState({ content: data.title }))
//       .catch(() => this.setState({ content: "Error" }))
//   }

//   render() {
//     return (
//       <article>
//         <h1>Content</h1>
//         <p>{this.state.content}</p>
//       </article>
//     )
//   }
// }

const Func = ({ content }) => (
  <article>
    <h1>Content</h1>
    <p>{content}</p>
  </article>
)

export const About = withContent(Func)