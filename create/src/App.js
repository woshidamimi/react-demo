import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import MyTable from './components/MyTable'
import { Button } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button type="primary">click</Button>
        <Router>
          <Route path="/">
              <Route path="/table" component={MyTable}></Route>
              <Route path="/nav" components={Nav} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
