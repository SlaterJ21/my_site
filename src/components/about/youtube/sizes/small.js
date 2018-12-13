import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Youtube from '../../../youtube'
import SmallAboutButtons from '../../buttons/sizes/small'
import '../../../../css/about/youtube/sizes/small.css'
import { connect } from 'react-redux'

class YoutubeSmall extends Component {

  render() {
    return (
      <Row>
        <SmallAboutButtons/>
        <Col className="youtubeContainer-s">
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
)(YoutubeSmall);
