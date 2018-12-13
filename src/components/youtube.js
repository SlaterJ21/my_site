import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import '../css/youtube.css'

export default class Youtube extends Component {

  render() {
    return (
      <Row>
        <Col l={12} m={12} className="hide-on-med-and-down">
          <div className="youtube large center-align">
            <iframe
              title="slowmotion"
              width="800"
              height="450"
              src={this.props.props}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              >
            </iframe>
          </div>
        </Col>
        <Col m={10} className="hide-on-small-only hide-on-large-only">
          <div className="youtube medium center-align">
            <iframe
              title="slowmotion"
              width="600"
              height="338"
              src={this.props.props}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              >
            </iframe>
          </div>
        </Col>
        <Col s={12} className="hide-on-med-and-up">
          <div className="youtube small center-align">
            <iframe
              title="slowmotion"
              width="290"
              height="163"
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
