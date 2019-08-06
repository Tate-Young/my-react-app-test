import React, { Component } from "react";

export const withContent = WrappedComponent =>
  class extends Component {
    state = {
      content: "holy 666 ..."
    }
  
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => this.setState({ content: data.title }))
        .catch(() => this.setState({ content: "Error" }))
    }
  
    render() {
      return <WrappedComponent content={this.state.content} {...this.props} />;
    }
  };