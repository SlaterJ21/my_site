import React, { Component } from 'react';
import { Row, Col, Button, Modal} from 'react-materialize';
import '../css/landing.css'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { landingAnimations } from '../actions'

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <Row>
          hello
      </Row>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

// const mapStateToProps = state => {
//   return {
//   }
// }

export default connect(
  null,
  null
)(Resume);
