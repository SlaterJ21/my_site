import React, { Component } from 'react';
import { connect } from 'react-redux'

import Landing from './components/landing.js';
import Resume from './components/resume.js'
import Projects from './components/projects.js'
import AboutMe from './components/about.js'


import './App.css';

class App extends Component {
  currentView() {
    switch(this.props.view) {

      case 'home':
        return <Landing/>

      case 'resume':
        return <Resume/>

      case 'projects':
        return <Projects/>

      case 'about':
        return <AboutMe/>

      default: return <Projects/>
    }
  }
  render() {
    return (
      <div className="App">
        {this.currentView()}
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view,
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
