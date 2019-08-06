import { Component } from "react";

export class RenderProps extends Component {
  state = {
    content: "123"
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => this.setState({ content: data.title }))
      .catch(() => this.setState({ content: "Error" }))
  }

  render() {
    return this.props.render(this.state.content);
  }
}