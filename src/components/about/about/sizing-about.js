import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Large from './sizes/large'
import Medium from './sizes/medium'
import Small from './sizes/small'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../../../actions'

class AboutSizing extends Component {
  render() {
    return (
      <Row>
        <Row>
          <Col className="hide-on-med-and-down">
            <Large/>
          </Col>
          <Col className="hide-on-small-only hide-on-large-only">
            <Medium/>
          </Col>
          <Col className="hide-on-med-and-up">
            <Small/>
          </Col>
        </Row>
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
)(AboutSizing);
