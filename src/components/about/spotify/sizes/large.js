import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';
import LargeAboutButtons from '../../buttons/sizes/large'
import Spotify from '../../../spotify'

import '../../../../css/about/spotify/sizes/large.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../../../../actions'

class SpotifyLarge extends Component {

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
      spotifyIndex: 0
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
  this.setState({spotify: this.shuffle(this.state.spotify)})
}

  render() {
    return (
      <Row>
        <LargeAboutButtons/>
        <Col l={2}>
        <div className="nextAlbum-l button-right-l right-align" onClick={() => this.prevDataSet()}><Icon small>chevron_left</Icon></div>
        </Col>
        <Col l={8} className="spotifyContainer-l center-align">
            <Spotify props={this.state.spotify[this.state.spotifyIndex][0]}/>
        </Col>
        <Col l={2}>
        <div className="nextAlbum-l button-left-l" onClick={() => this.nextDataSet()}><Icon small>chevron_right</Icon></div>
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
)(SpotifyLarge);
