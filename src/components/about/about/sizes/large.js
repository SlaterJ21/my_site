
import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import LargeAboutButtons from '../../buttons/sizes/large'

import '../../../../css/about/about/sizes/large.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../../../../actions'

class AboutLarge extends Component {
  render() {
    return (
      <Row>
        <LargeAboutButtons/>
        <Col className="aboutContainer-l">
          <Col className="aboutMe-l hide-on-small-only">
            <p>I’m a Full-Stack Web Developer, familiar with all steps involved in creating dynamic web applications. My background in UI/UX design, client relations and technical training inform my mindful but competitive approach to test driven development.</p>
            <p>I’m  fueled by my passion for understanding the nuances of UI/UX. I consider myself a ‘forever student,’ eager to both build on my academic foundations and stay in tune with the latest technologies through continued coursework and professional development.</p>
            <p>My hunger for knowledge and determination to turn information into action has contributed to my most recent success pursuing academic advancement. I believe mindfulness in the workplace is key to success, a tenet I live out through my interests in climbing, yoga, meditation and building meaningful relationships.</p>
          </Col>
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
)(AboutLarge);
