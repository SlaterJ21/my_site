import React, { Component } from 'react';
import YoutubeSizing from './youtube/sizing-youtube'
import SpotifySizing from './spotify/sizing-spotify'
import AboutSizing from './about/sizing-about'
import { connect } from 'react-redux'

class AboutMe extends Component {

content() {
  switch(this.props.aboutData) {
    case 'spotify':
      return (
        <SpotifySizing/>
      )
    case 'youtube':
      return (
        <YoutubeSizing/>
      )
    case 'about':
      return (
        <AboutSizing/>
      )
    default:
      return (
        <AboutSizing/>
      )
  }
}
  render() {
    return (
        this.content()
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutData: state.mainReducer.aboutData
  }
}

export default connect(
  mapStateToProps,
  null
)(AboutMe);
