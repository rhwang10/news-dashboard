import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Articles from './components/Articles'
import CustomTrend from './components/CustomTrend'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CustomTrend/>
        </header>
        <body>
          <Articles></Articles>
        </body>
      </div>
    );
  }
}

export default App;
