import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Youtube from '../../../youtube'
import LargeAboutButtons from '../../buttons/sizes/large'
import '../../../../css/about/youtube/sizes/large.css'
import { connect } from 'react-redux'

class YoutubeLarge extends Component {
  render() {
    return (
      <Row>
        <LargeAboutButtons/>
        <Col className="youtubeContainer-l">
          {this.props.videos.map(video => <Youtube props={video[0]}/>)}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.mainReducer.videos
  }
}

export default connect(
  mapStateToProps,
  null
)(YoutubeLarge);
