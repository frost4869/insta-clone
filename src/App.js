import React, { Component } from 'react';
import './App.css';
import logo from './ista-icon.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Insta Clone</h1>
        </header>
      </div>
    );
  }
}

export default App;
