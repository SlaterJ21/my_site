import React, { Component } from 'react';
import { Row, Col, Button, Modal} from 'react-materialize';
import '../css/landing.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const { changeView } = this.props
    return (
      <Row>
          <div onClick={() => changeView('home')}>hello</div>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
