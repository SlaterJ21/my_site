import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import '../css/youtube.css'

export default class Youtube extends Component {

  render() {
    return (
      <Row className="center-align">
        <Col l={12} m={12} s={12}>
          <div className="youtube center-align">
            <iframe
              title="slowmotion"
              width="352"
              height="198"
              src={this.props.props}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              >
            </iframe>
          </div>
        </Col>
      </Row>
    )
  }
}
