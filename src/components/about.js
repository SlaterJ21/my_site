import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';
import Youtube from './youtube'
import AboutButtons from './about-buttons'
import Spotify from './spotify'

import '../css/about.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

class AboutMe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      spotify: [
        ['https://open.spotify.com/embed/album/7vXiklrUeffx5o2F8VYwm3', 'RKS'],
        ['https://open.spotify.com/embed/album/1rQZbncicoXyB64DqoH7OY', 'Incubus'],
        ['https://open.spotify.com/embed/album/3qcXtSsTV6L0Zwf3BpcjDZ', 'Discovery'],
        ['https://open.spotify.com/embed/album/0X9bvQYYtrAYdkO4OKtYwz', 'John Mayer'],
        ['https://open.spotify.com/embed/album/08fkw9uDP2KET6cPIl74Xo', 'Band of Horses'],
        ['https://open.spotify.com/embed/album/5ll74bqtkcXlKE7wwkMq4g', 'Kanye'],
        ['https://open.spotify.com/embed/album/6RlfbA2m8ch5vBYkRS7nuK', 'Eagles'],
        ['https://open.spotify.com/embed/album/6D1rTYBev0y8ZKE5tD7OP9', 'Taking Back Sunday'],
        ['https://open.spotify.com/embed/album/1eIzVBHA5NvX0wo2nLACew', 'AFI'],
        ['https://open.spotify.com/embed/album/4Zl638FA70c4Oxh4AimZLh', 'Shins'],
        ['https://open.spotify.com/embed/album/3cSzKBfylctgJwqorcNEo2', 'YTG'],
        ['https://open.spotify.com/embed/album/0TGTGuc2vXv6ZECoAf52N0', 'Modest Mouse'],
        ['https://open.spotify.com/embed/album/6KC06etxRkjUDzvfxU5sgA','Chon'],
        ['https://open.spotify.com/embed/user/humanpinata%2521/playlist/3lWQmusgd82XtKVgPzIEbw', 'Girl Yeah Right' ]
      ],
      spotifyIndex: 0,
      youtube: [
        ['https://www.youtube.com/embed/98fjYGS424s?start=440', 'Wedding'],
        ['https://www.youtube.com/embed/ZQbpIirqzqU', 'Slow Motion'],
        ['https://www.youtube.com/embed/3H8RLejC1kQ', 'Galvanize'],
        ['https://www.youtube.com/embed/L9RyiFRe1oI', 'Climbing']
      ],
      youtubeIndex: 0
    }

  }

shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

randomSpotify() {
  this.setState({spotifyIndex: Math.floor(Math.random() * this.state.spotify.length)})
}

randomYoutube() {
  this.setState({youtubeIndex: Math.floor(Math.random() * this.state.youtube.length)})
}

changeData(type) {
  this.setState({data: type})
}

content() {

  switch(this.props.aboutData) {

    case 'spotify':
      return (
        <Spotify props={this.state.spotify[this.state.spotifyIndex][0]}/>
      )

    case 'youtube':
      return (
        this.shuffle(this.state.youtube).map(video => <Youtube props={video[0]}/>)
      )

    case 'about':
      return (
          'About me...TBW'
      )

    default:
      return (
        this.shuffle(this.state.youtube).map(video => <Youtube props={video[0]}/>)
      )
  }

}

nextDataSet() {
  if (this.state.spotifyIndex === this.state.spotify.length - 1) {
    this.setState({
      spotifyIndex: 0,
    })
  } else {
    this.setState({
      spotifyIndex: this.state.spotifyIndex + 1
    })
  }
}

prevDataSet() {
  if (this.state.spotifyIndex ===  0) {
    this.setState({
      spotifyIndex: this.state.spotify.length - 1,
    })
  } else {
    this.setState({
      spotifyIndex: this.state.spotifyIndex - 1
    })
  }
}

componentDidMount() {
  this.randomSpotify()
  this.randomYoutube()
  this.setState({spotify: this.shuffle(this.state.spotify)})
}

  render() {
    const { changeView } = this.props
    return (
      <Row>
        <Col l={12}>
        <Col l={12} m={12} s={12} height="80px">
          <div className="initial-about"
            onClick={() => changeView('home')}
            style={ { height: 80 } }
          >
            <div className="initial1about">JS</div>
          </div>
        </Col>
        <Row>
            <Col l={12}>
              <AboutButtons/>
            </Col>
        </Row>

        <Row className="aboutContainer">
          {this.content()}
        </Row>
        <Col m={2} s={3}></Col>
        <Col l={12}
         style={{
           opacity: this.props.aboutData === 'spotify' ? 1 : 0
         }}
        >
          <Col l={3} m={6} s={4}></Col>
          <Col l={2} m={2} s={1}>
          <div className="nextAlbum button-right" onClick={() => this.prevDataSet()}><Icon small>chevron_left</Icon></div>
          </Col>
          <Col l={2} m={2} s={2}></Col>
          <Col l={2} m={2} s={2}>
            <div className="nextAlbum button-left" onClick={() => this.nextDataSet()}><Icon small>chevron_right</Icon></div>
          </Col>
        </Col>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeView
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view,
    aboutData: state.mainReducer.aboutData
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe);
