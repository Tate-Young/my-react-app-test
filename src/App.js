import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* header */}
        <Header avatar={logo}></Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.sayName = this.sayName.bind(this)
    this.state = {
      name: 'tate'
    }
    
  }
  sayName() {
    alert('hello')
  }
  render() {
    return (
      <header className = "App-header">
        <img src={this.props.avatar} className="App-logo" alt="logo" onClick={this.sayName}/>
        <h1 className="App-title">Welcome {this.state.name} to React</h1>
      </header>
    )
  }
}

export default App;
