import React, { Component } from 'react';
import { Row, Col} from 'react-materialize';
import '../css/resume.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false,
      tech: false,
      samples: false,
      experience: false
    }
  }

  fadeOut(view) {
    this.setState({fadeIn: false})
    setTimeout(() => this.props.changeView(view), 800)
  }

  showHide(field) {
    console.log(field);
    this.setState({[field]: !this.state[field]})
  }

  componentDidMount() {
    setTimeout(() => this.setState({fadeIn: true}), 100)
  }

  render() {
    return (
      <Row className="resume"
        style={{
          opacity: this.state.fadeIn ? 1 : 0
        }}
      >

        <Row>
          <Col l={2} m={1} s={1}></Col>
          <Col l={8} m={10} s={10} className="nav-bar">
          <Col l={12} m={12} s={12} height="80px">
            <div className="initial-resume"
              onClick={() => this.fadeOut('home')}
              style={ { height: 80 } }
            >
              <div className="initial1resume">JS</div>
            </div>
          </Col>

          </Col>
          <Col l={2} m={1} s={1}></Col>
        </Row>

        <Row>
          <Col l={2} m={1} s={1}></Col>
          <Col l={8} m={10} s={10} className="res-block">
            <Col l={1} m={1} s={1}></Col>
            <Col l={10} m={10} s={10} className="res">
              <Row>
                <h5 className="center-align tech" onClick={() => this.showHide('tech')}> Technical Summary </h5>
              </Row>
              <Row className="center-align res">
                <Col l={2} m={2} s={2}></Col>
                <Col l={3} m={3} s={3} className="left-align">
                  <ul>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/about/">Node.js</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/basics/usagewithreact">React-Redux</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2">TDD</a></li>
                  </ul>
                </Col>
                <Col s={1} className="hide-on-med-and-up"></Col>
                <Col l={3} m={3} s={3} className="left-align">
                  <ul>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.w3schools.com/html/html_css.asp">HTML/CSS</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="http://www.reactnative.com/">React-Native</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://knexjs.org/">Knex.js</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.postgresql.org/">PostgreSQL</a></li>
                  </ul>
                </Col>
                <Col l={3} m={3} className="hide-on-small-only left-align">
                  <ul>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://greensock.com/">GreenSock</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://expressjs.com/">Express.js</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://medium.com/@socraticsol/why-mvc-architecture-e833e28e0c76">MVC Architecture</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.heroku.com/">Heroku</a></li>
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
            <Col className="res">
              <Row className="center-align">
                <h5 onClick={() => this.showHide('samples')}> Project Samples </h5>
              </Row>
              <Col l={1} m={1} s={0}></Col>
              <Col l={10} m={10} s={12}>
                <Row className="left-align res">

                <Col l={12} m={12} s={12}>
                <h6><b>Mobile Food Finder</b></h6>
                <p>Transactional tool to keep track of orders. Owners can create new trucks, menu items and toggle status. Eaters can browse online trucks and place orders. Features encrypted passwords and easy-to-use interface.</p>
                <p><em>React Native with Redux, JavaScript</em></p>
                </Col>

                <Col l={12} m={12} s={12}>
                <h6><b>MFF API</b></h6>
                <p>Supporting API for Mobile Food Finder. Utilizes MVC and a five-way join table.</p>
                <p><em>PostgreSQL, Knex, Heroku</em></p>
                </Col>

                <Col l={12} m={12} s={12}>
                <h6><b>CleveRent</b></h6>
                <p>Created an app to facilitate Tenant property management communications. Emphasis on project planning including term goals.</p>
                <p><em>JavaScript, Materialize, PostgreSQL, Knex, CSS, HTML, jQuery</em></p>
                </Col>

                </Row>
              </Col>
            </Col>
          </Col>
        </Row>

        <Row>
            <Col l={2} m={1} s={1}></Col>
            <Col l={8} m={10} s={10} className="res-block last">
            <Col l={1}></Col>
            <Col l={10} className="res">
              <Row>
                <h5 className="center-align"> Experience </h5>
              </Row>
              <Row className="left-align res experience">
                <Col l={12} m={12} s={12}>
                  <h6><b>Application Developer</b> / <em>EightTen - Denver, CO</em></h6>
                  <p>Their vision for this particular project was to build a cultural assessment tool that allows companies to fill out a self-reporting survey. The tool serves as a platform for employers to be connected with professionals who can offer consultation and help create a roadmap for improvement.</p>
                  <p><em>React Native with Redux, JavaScript</em></p>
                </Col>
                <Col l={12} m={12} s={12}>
                  <h6><b>Lead Technician</b> / <em>Mr.Sandless - Denver, CO</em></h6>
                  <p>Mr. Sandless was my employer from 01/12 - 12/17. In 2016 I moved to Colorado to help a new franchise owner stand up his business. My responsibilities included job estimation - completion and training.</p>
                  <p><em>Customer Relations, Project Management, Training, Wood-Working</em></p>
                </Col>
              </Row>
            </Col>
            <Col l={1} m={1} s={1}></Col>
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
