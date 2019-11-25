import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import MyTable from './components/MyTable'
import MyTest from './components/MyTest'
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
              <Route path="/nav" component={Nav} />
              <Route path="/test" component={MyTest} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
