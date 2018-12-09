import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import '../css/about-buttons.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAboutData } from '../actions'

class AboutButtons extends Component {

  render() {
    const { changeAboutData } = this.props
    return (
      <Row>
        <div className="aboutButtons">
          <Col l={4} m={4} s={4} className="center-align">
            <div className="aboutButton">
              <img src={require("../01img/user-account-box.svg")} onClick={() => changeAboutData('about')} alt="user" width="35"/>
            </div>
          </Col>

          <Col l={4} m={4} s={4} className="center-align">
            <div className="youtubeButton">
            <img src={require("../01img/youtube.svg")} onClick={() => changeAboutData('youtube')} width="50" alt="GitHub" className="darker"/>
            </div>
          </Col>

          <Col l={4} m={4} s={4} className="center-align">
            <div className="spotifyButton">
              <img src={require("../01img/spotify-logo-button.svg")} onClick={() => changeAboutData('spotify')} width="35" alt="Youtube" />
            </div>
          </Col>
        </div>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeAboutData
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutButtons);
