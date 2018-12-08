import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import Youtube from './youtube'

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
        ['https://www.youtube.com/embed/ZQbpIirqzqU', 'Slow Motion'],
        ['https://www.youtube.com/embed/3H8RLejC1kQ', 'Galvanize'],
        ['https://www.youtube.com/embed/L9RyiFRe1oI', 'Climbing'],
        ['https://www.youtube.com/embed/jD-8LKESaFQ?start=7', 'Climbing 2']
      ],
      youtubeIndex: 0,
      data: ''
    }

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
  switch(this.state.data) {

    case 'spotify':
      return (
        <Row className="aboutContainer">
          <Col l={12}>
            <div className="spotify">
              <iframe title="rks" src={this.state.spotify[this.state.spotifyIndex][0]} width="250" height="350" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <div onClick={() => this.randomSpotify()}> next album </div>
            </div>
          </Col>
        </Row>
      )

    case 'youtube':
      return (
        <Row className="aboutContainer">
          <Youtube/>
          <Youtube/>
          <Youtube/>
        </Row>
      )

    case 'about':
      return (
        <Row className="aboutContainer">
          This is what im about
        </Row>
      )

    default:
      return (
        <Row className="aboutContainer">
          hello
        </Row>
      )
  }

}


componentDidMount() {
  this.randomSpotify()
  this.randomYoutube()
}

  render() {
    const { changeView } = this.props
    return (
      <Row>
        <Col l={12}>
        <Col l={3}></Col>
        <Col l={12} m={12} s={12}>
          <div className="initial-small"
            onClick={() => changeView('home')}
            style={ {
               height: 80
             } }
          >
            <div className="initial1small">JS</div>
          </div>
        </Col>
          <Row>
            <div
              className="buttons"
              style={ {
               } }
            >
              <Col l={4} m={4} s={4} className="center-align">
                <img src={require("../01img/user-account-box.svg")} onClick={() => this.changeData('about')} alt="user" width="35" opacity={0.1}/>
              </Col>

              <Col l={4} m={4} s={4} className="center-align insta">
                  <img src={require("../01img/spotify-logo-button.svg")} onClick={() => this.changeData('spotify')} width="44.75" alt="Youtube" />
              </Col>

              <Col l={4} m={4} s={4} className="center-align">
                  <img src={require("../01img/youtube.svg")} onClick={() => this.changeData('youtube')} width="56" alt="GitHub" className="darker"/>
              </Col>

            </div>
          </Row>
            {this.content()}
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe);
