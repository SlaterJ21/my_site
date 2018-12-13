import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Large from './sizes/large'
import Medium from './sizes/medium'
import Small from './sizes/small'

export default class YoutubeSizing extends Component {

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
