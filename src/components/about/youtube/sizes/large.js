import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Youtube from '../../../youtube'
import LargeAboutButtons from '../../buttons/sizes/large'

import '../../../../css/about/youtube/sizes/large.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../../../../actions'

class YoutubeLarge extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
  let currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

randomYoutube() {
  this.setState({youtubeIndex: Math.floor(Math.random() * this.state.youtube.length)})
}

componentDidMount() {
  this.randomYoutube()
}

  render() {
    return (
      <Row>
        <LargeAboutButtons/>
        <Col className="youtubeContainer-l">
          {this.shuffle(this.state.youtube).map(video => <Youtube props={video[0]}/>)}
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
)(YoutubeLarge);
