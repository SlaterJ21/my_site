import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import '../css/youtube.css'

export default class Spotify extends Component {

  render() {
    return (
      <Row className="aboutContainer center-align">
        <Col l={10}>
          <div className="spotify">
            <iframe
            title="rks"
            src={this.props.props}
            width="350" height="550"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            >
            </iframe>
          </div>
        </Col>
      </Row>
    );
  }
}
