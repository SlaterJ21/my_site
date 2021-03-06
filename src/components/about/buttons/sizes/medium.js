import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import '../../../../css/about/buttons/sizes/medium.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAboutData, changeView } from '../../../../actions'

class MediumAboutButtons extends Component {

  render() {
    const { changeAboutData, changeView } = this.props
    return (
      <Row className="buttons-container-m center-align">
          <Row className="aboutButtons-m center-align">

            <Col m={3}>
              <div className="initial-m"
              onClick={() => changeView('home')}
              >
                JS
              </div>
            </Col>

            <Col m={3} className="center-align">
              <div className="aboutButton">
                <img src={require("../../../../01img/user-account-box.svg")} onClick={() => changeAboutData('about')} alt="user" width="35"/>
              </div>
            </Col>

            <Col m={3} className="center-align">
              <div className="spotifyButton">
                <img src={require("../../../../01img/spotify-logo-button.svg")} onClick={() => changeAboutData('spotify')} width="35" alt="Youtube" />
              </div>
            </Col>

            <Col m={3} className="center-align">
              <div className="youtubeButton">
                <img src={require("../../../../01img/youtube.svg")} onClick={() => changeAboutData('youtube')} width="50" alt="GitHub" className="darker"/>
              </div>
            </Col>

          </Row>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeAboutData,
  changeView
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(MediumAboutButtons);
