import React, { Component } from 'react';

import Landing from './components/landing.js';
import Resume from './components/resume.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
      </div>
    );
  }
}

export default App;
