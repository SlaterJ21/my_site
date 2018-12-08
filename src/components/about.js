import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
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
      youtubeIndex: 0
    }

  }

randomSpotify() {
  this.setState({spotifyIndex: Math.floor(Math.random() * this.state.spotify.length)})
}

randomYoutube() {
  this.setState({youtubeIndex: Math.floor(Math.random() * this.state.youtube.length)})
}


componentDidMount() {
  this.randomSpotify()
  this.randomYoutube()
}

  render() {
    const { changeView } = this.props
    return (
      <Row>
        <Row>
          <Button> hello </Button>
          <Button> goodbye </Button>
        </Row>
        <Col l={12}>
          <div className="spotify">
            <iframe title="rks" src={this.state.spotify[this.state.spotifyIndex][0]} width="250" height="350" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div onClick={() => this.randomSpotify()}> next album </div>
          </div>
        </Col>
        <Col l={4}></Col>
        <Col l={12}>
          <div className="youtube">
            <iframe title="slowmotion" width="560" height="315" src={this.state.youtube[this.state.youtubeIndex][0]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div onClick={() => this.randomYoutube()}> next video </div>
          </div>
        </Col>

        <div onClick={() => changeView('home')}>hello</div>
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
