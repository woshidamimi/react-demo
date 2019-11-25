import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import MyTable from './components/MyTable'
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button type="primary">click</Button>
        <Nav />
        <MyTable></MyTable>
      </div>
    );
  }
}

export default App;
