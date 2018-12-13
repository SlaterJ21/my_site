import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Youtube from '../../../youtube'
import MediumAboutButtons from '../../buttons/sizes/medium'
import { connect } from 'react-redux'
import '../../../../css/about/youtube/sizes/medium.css'

class YoutubeMedium extends Component {
  render() {
    return (
      <Row>
        <MediumAboutButtons/>
        <Col className="youtubeContainer-m">
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
)(YoutubeMedium);
