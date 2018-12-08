import React, { Component } from 'react';
import { Row, Col, Button, Modal} from 'react-materialize';
import '../css/landing.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      initialAni: false,
      list: ['Web Developer', 'Climber', 'Snowboarder', 'Carpenter', 'Musician', 'Golfer', 'Dog Parent'],
      listNum: 0,
      listChar: 0,
      name: 'Jeff Slater',
      nameChar: 0,
      linkShow: false,
      buttonShow: false,
      fadeOut: false
    }
  }

  revealListChar(){

    if (this.state.listNum === this.state.list.length - 1 && this.state.listChar === this.state.list[this.state.listNum].length + 40) {
      this.setState({
        listChar: 0,
        listNum: 0
      })
    } else if (this.state.listChar === this.state.list[this.state.listNum].length + 40) {
      this.setState({
        listChar: 0,
        listNum: this.state.listNum + 1
      })
    } else {
      this.setState({
        listChar: this.state.listChar + 1
      })
    }
  }

  revealTitleChar() {
    this.setState({
      titleChar: this.state.titleChar + 1
    })
  }

  revealNameChar() {
    this.setState({
      nameChar: this.state.nameChar + 1
    })
  }

  fadeOut(view) {
    this.setState({fadeOut: true})
    setTimeout(() => this.props.changeView(view), 500)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true })
      setTimeout(() => this.setState({initialAni: true}), 300)
      setTimeout(() => {
        let revealChar = setInterval(() => this.revealNameChar(), 75)
        setTimeout(() => clearInterval(revealChar), 1500)
      }, 500)
      setTimeout(() => { setInterval(() => this.revealListChar(), 60) }, 1500)
      setTimeout(() => this.setState({linkShow: true}), 2000)
      setTimeout(() => this.setState({buttonShow: true}), 2250)
    }, 100)
  }

  render() {
    const { changeView } = this.props
    return (
      <Row>
          <Col s={6} m={6} l={6}>
            <div
              className="container"
              style={ {
                 height: this.state.animate ? 400 : 300,
                 opacity: this.state.fadeOut ? 0 : 1
               } }
            >

              <Row>

                <Col l={12} m={12} s={12}>
                  <div className="initial"
                    style={ {
                       height: this.state.initialAni ? 80 : 0,
                       opacity: this.state.initialAni ? 1 : 0
                     } }
                  >
                    <div className="initial1"
                      style={ {
                         fontSize: this.state.initialAni ? "40px" : "0px",
                         opacity: this.state.initialAni ? 1 : 0
                       } }
                    >JS</div>
                  </div>
                </Col>

                <Col l={12} m={12} s={12}>
                  <div className="name center-align">
                    {this.state.name.substring(0, this.state.nameChar)}
                  </div>
                </Col>

                <Col l={12} m={12} s={12}>
                  <div className="title center-align">
                    <b className="hide1">-</b>{this.state.list[this.state.listNum].substring(0, this.state.listChar)}<b className="hide1">-</b>
                  </div>
                </Col>

                <Col l={12} m={12} s={12}>
                  <div
                    className="links"
                    style={ {
                       opacity: this.state.linkShow ? 1 : 0,
                     } }
                  >
                    <Col l={4} m={4} s={4} className="center-align">
                      <Button className="link" href="#" onClick={() => alert('Under Development')}>About</Button>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <Button className="link" href="#" onClick={() => changeView('projects')}>Projects</Button>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <Button className="link" href="#" onClick={() => this.fadeOut('resume')}>Resume</Button>
                    </Col>
                  </div>
                </Col>

                <Col l={12} m={12} s={12}>
                  <div
                    className="buttons"
                    style={ {
                       opacity: this.state.buttonShow ? 1 : 0,
                     } }
                  >
                    <Col l={4} m={4} s={4} className="center-align insta">
                      <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/jeffrysdayoff/">
                        <img src="https://www.freeiconspng.com/uploads/black-instagram-icon-vector-22.png" width="44.75" alt="Black Instagram Icon Vector" />
                      </a>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <a rel="noopener noreferrer" target="_blank" href="https://github.com/SlaterJ21">
                        <img src={require("../01img/GitHub-Mark-32px.png")} alt="GitHub" className="darker"/>
                      </a>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jeffry-slater-a5196015b/">
                        <img src={require("../01img/linkedin.png")} alt="linkedin" width="35" opacity={0.1}/>
                      </a>
                    </Col>
                  </div>
                </Col>

              </Row>
            </div>
          </Col>
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
)(Landing);
