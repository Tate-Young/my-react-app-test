import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
// import Counter from './container'
import { About, Home, Hooks } from './components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Hooks} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Hooks</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}


export default hot(module)(App)
