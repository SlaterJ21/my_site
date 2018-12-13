import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import '../css/spotify.css'

export default class Spotify extends Component {

  render() {
    return (
      <Row>
          <Col className="center-align hide-on-med-and-up spotify-s">
          <iframe
          title="rks"
          src={this.props.props}
          width="250" height="400"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          >
          </iframe>
          </Col>
        <Col s={12} className="hide-on-small-only">
          <Col className="spotify">
          <iframe
          title="rks"
          src={this.props.props}
          width="350" height="400"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          >
          </iframe>
          </Col>
        </Col>
      </Row>
    );
  }
}
