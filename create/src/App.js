import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
