import React, { Component } from 'react';
import { Row, Col, Button, Modal, Navbar, NavItem} from 'react-materialize';
import Logo from './logo'
import '../css/resume.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false
    }
  }

  fadeOut(view) {
    this.setState({fadeIn: false})
    setTimeout(() => this.props.changeView(view), 800)
  }

  componentDidMount() {
    setTimeout(() => this.setState({fadeIn: true}), 100)
  }

  render() {
    const { changeView } = this.props
    return (
      <Row className="resume"
        style={{
          opacity: this.state.fadeIn ? 1 : 0
        }}
      >

        <Row>
          <Col l={2} m={1} s={1}></Col>
          <Col l={8} m={10} s={10} className="nav-bar">
            <Col l={2} className="initials">
              <b onClick={() => {this.fadeOut('home')}}>JS</b>
            </Col>
          </Col>
          <Col l={2} m={1} s={1}></Col>
        </Row>

        <Row>
          <Col l={2} m={1} s={1}></Col>
          <Col l={8} m={10} s={10} className="res-block">
            <Col l={1}></Col>
            <Col l={10}>
              <Row>
                <h5 className="center-align tech"> Technical Summary </h5>
              </Row>
              <Row className="center-align">
                <Col l={4} m={4} s={6}>
                  <ul>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </Col>
                <Col l={4} m={4} s={6}>
                  <ul>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>Redux</li>
                  </ul>
                </Col>
                <Col l={4} m={4} className="hide-on-small-only">
                  <ul>
                    <li>GreenSock</li>
                    <li>Express</li>
                    <li>Heroku</li>
                    <li>PostgreSQL</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          <Col l={2} m={1} s={1}></Col>
          </Col>
        </Row>

        <Row>
            <Col l={2} m={1} s={1}></Col>
            <Col l={8} m={10} s={10} className="res-block">
            <Col l={1}></Col>
            <Col l={10}>
              <Row>
                <h5 className="center-align"> Project Samples </h5>
              </Row>
              <Row className="left-align">
                <Col l={10} m={10} s={10}>
                <h6><b>Mobile Food Finder</b> / <em>github.com/SlaterJ21/MFFapp/graphs/contributors</em></h6>
                <p>Transactional tool to keep track of orders. Owners can create new trucks, menu items and toggle status. Eaters can browse online trucks and place orders. Features encrypted passwords and easy-to-use interface.</p>
                <p><em>React Native with Redux, JavaScript</em></p>
                </Col>
                <Col l={10} m={10} s={10}>
                <h6><b>MFF API</b> / <em>github.com/SlaterJ21/MFF-API/graphs/contributors</em></h6>
                <p>Supporting API for Mobile Food Finder. Utilizes MVC and a five-way join table.</p>
                <p><em>PostgreSQL, Knex, Heroku</em></p>
                </Col>
                <Col l={10} m={10} s={10}>
                <h6><b>CleveRent</b> / <em>cleverent.herokuapp.com</em></h6>
                <p>Created an app to facilitate Tenant property management communications. Emphasis on project planning including term goals.</p>
                <p><em>JavaScript, Materialize, PostgreSQL, Knex, CSS, HTML, jQuery</em></p>
                </Col>
              </Row>
            </Col>
            <Col l={2} m={1} s={1}></Col>
          </Col>
        </Row>

        <Row>
            <Col l={2} m={1} s={1}></Col>
            <Col l={8} m={10} s={10} className="res-block">
            <Col l={1}></Col>
            <Col l={10}>
              <Row>
                <h5 className="center-align"> Experience </h5>
              </Row>
              <Row className="left-align">
                <Col l={10} m={10} s={10}>
                <h6><b>Application Developer</b> / <em>EightTen - Denver, CO</em></h6>
                <p>Their vision for this particular project was to build a cultural assessment tool that allows companies to fill out a self-reporting survey. The tool serves as a platform for employers to be connected with professionals who can offer consultation and help create a roadmap for improvement.</p>
                <p><em>React Native with Redux, JavaScript</em></p>
                </Col>
              </Row>
            </Col>
            <Col l={2} m={1} s={1}></Col>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
