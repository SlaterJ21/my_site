import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import '../../../../css/about/buttons/sizes/small.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAboutData, changeView } from '../../../../actions'

class SmallAboutButtons extends Component {

  render() {
    const { changeAboutData, changeView } = this.props
    return (
      <Row className="buttons-container-s center-align">
          <Row className="aboutButtons-s center-align">

            <Col s={3}>
              <div className="initial-s"
              onClick={() => changeView('home')}
              >
                JS
              </div>
            </Col>

            <Col s={3} className="center-align">
              <div className="aboutButton-s">
                <img src={require("../../../../01img/user-account-box.svg")} onClick={() => changeAboutData('about')} alt="user" width="25"/>
              </div>
            </Col>


            <Col s={3} className="center-align">
              <div className="spotifyButton-s">
                <img src={require("../../../../01img/spotify-logo-button.svg")} onClick={() => changeAboutData('spotify')} width="25" alt="Youtube" />
              </div>
            </Col>

            <Col s={3} className="center-align">
              <div className="youtubeButton-s">
                <img src={require("../../../../01img/youtube.svg")} onClick={() => changeAboutData('youtube')} width="35" alt="GitHub" className="darker"/>
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
)(SmallAboutButtons);
