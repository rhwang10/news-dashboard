import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Articles from './components/Articles'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Articles></Articles>
        </header>
      </div>
    );
  }
}

export default App;
