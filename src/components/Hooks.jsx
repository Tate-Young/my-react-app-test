import React from 'react'

export class Hooks extends React.Component {
  state = {
    count: 0
  }

  setCount = () => this.setState({ count: this.state.count + 1 })

  render() {
    const { count } = this.state
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.setCount}>
          Click me
        </button>
      </div>
    );
  }
}