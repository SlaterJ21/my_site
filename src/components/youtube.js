import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import '../css/youtube.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

class Youtube extends Component {

  constructor(props) {
    super(props);

    this.state = {
      maxMin: false
    }

  }

componentDidMount() {
}

  render() {
    const { changeView } = this.props
    return (
      <Col l={12} m={12}>
        <Col l={6} m={12} s={12}>
          <div className="youtube center-align">
            <iframe
              title="slowmotion"
              width="448"
              height="252"
              src='https://www.youtube.com/embed/ZQbpIirqzqU'
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              >
            </iframe>
          </div>
        </Col>
        <Col l={6} m={12} s={12}>
          <div className="youtube center-align">
            <iframe
              title="slowmotion"
              width="448"
              height="252"
              src='https://www.youtube.com/embed/ZQbpIirqzqU'
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              >
            </iframe>
          </div>
        </Col>
      </Col>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeView
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Youtube);
