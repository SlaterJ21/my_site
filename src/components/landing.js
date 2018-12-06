import React, { Component } from 'react';
import { Row, Col, Button} from 'react-materialize';
import '../css/landing.css'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      list: ['Web Developer', 'Carpenter', 'Snow-Boarder', 'Musician', 'Golfer', 'Dog Parent'],
      listNum: 0,
      listChar: 0,
      name: 'Jeffry Slater',
      nameChar: 0,
      linkShow: false,
      buttonShow: false
    }
  }

  revealListChar(){

    if (this.state.listNum === this.state.list.length - 1 && this.state.listChar === this.state.list[this.state.listNum].length + 20) {
      this.setState({
        listChar: 0,
        listNum: 0
      })
    } else if (this.state.listChar === this.state.list[this.state.listNum].length + 20) {
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


  componentDidMount() {
    setTimeout(() => {
      let revealChar = setInterval(() => this.revealNameChar(), 100)
      setTimeout(() => clearInterval(revealChar), 1500)
    }, 100)
    setTimeout(() => {
      setInterval(() => this.revealListChar(), 150)
    }, 1500)
    setTimeout(() => this.setState({linkShow: true}), 3000)
    setTimeout(() => this.setState({buttonShow: true}), 4000)
    requestAnimationFrame(() => {
      this.setState({ animate: true });
    });
  }

  render() {

    console.log(this.state.list[0]);

    return (
      <Row>
          <Col s={12} m={12} l={12}>
            <div
              className="container"
              style={ {
                 height: this.state.animate ? 400 : 300,
                 borderColor: this.state.animate ? "white" : "grey"
               } }
            >

              <Row>

                <Col l={12} m={12} s={12}>
                  <div className="initial"
                    style={ {
                       height: this.state.animate ? 100 : 80
                     } }
                  >
                    <div className="initial1"
                      style={ {
                         fontSize: this.state.animate ? "40px" : "30px"
                       } }
                    >J</div>
                    <div className="initial2"
                      style={ {
                         fontSize: this.state.animate ? "40px" : "30px"
                       } }
                    >S</div>
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
                      <Button className="link" href="#">About</Button>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <Button className="link" href="#">Projects</Button>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <Button className="link" href="#">Resume</Button>
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
                      <img src="https://www.freeiconspng.com/uploads/black-instagram-icon-vector-22.png" width="44.75" alt="Black Instagram Icon Vector" />
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <img src={require("../01img/GitHub-Mark-32px.png")} alt="GitHub"/>
                    </Col>

                    <Col l={4} m={4} s={4} className="center-align">
                      <img src={require("../01img/linkedin.png")} alt="linkedin" width="35" opacity={0.1}/>
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

export default Landing;
