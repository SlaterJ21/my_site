import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import '../css/projects.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeView } from '../actions'

const cardData = [
  {
    title: "Niwot BarberShop",
    href: "https://niwot-barber.herokuapp.com",
    imgSrc: require("../01img/app_shots/barber.png"),
    about: "After speaking with Alivia Bell, Owner/Operator of The Niwot Barbershop, I found that she could benefit from an up-to-date website for her shop. I knew that the expense of a website wasn't viable for the business. With a little free time and the desire to find a project I decided to build the website for Aliva as a gift.",
    features: 'Responsive Design, Floating Navigation Button, Moving Barbershop Pole, Day of the Week Tracker, Embedded Map'
  },
  {
    title: "CleveRent",
    href: "https://cleverent.herokuapp.com",
    imgSrc: require("../01img/app_shots/cleverent.png"),
    about: 'The idea behind CleveRent was to facilitate Tenant to Property management communications.',
    features: 'Auth0, bcrypt, JWT, Programmatically popullated cards with images based on user input'
  },
  {
    title: "Mobile Food Finder",
    href: "#",
    imgSrc: require("../01img/app_shots/mff2.png"),
    about: 'Transactional tool to keep track of orders. Owners can create new trucks, menu items and toggle status. Eaters can browse online trucks and place orders.',
    features: 'Auth0, bcrypt, JWT, Programmatically popullated cards with images based on user input'
  }
]

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentData: 0,
      cardData: cardData,
      dataType: 'about',
      timer: 8
    }
  }

  changeDataType(type) {
    this.setState({dataType: type})
  }

  randomNum() {
    return Math.floor(Math.random() * cardData.length)
  }

  decrementTimer() {
    if( this.state.timer === 0 ){
      this.nextDataSet()
      this.setState({timer: 8})
    } else {
      this.setState({timer: this.state.timer - 1})
    }
  }

  resetTimer(){
    this.setState({timer: 8})
  }

  nextDataSet() {
    if (this.state.currentData === this.state.cardData.length - 1) {
      this.setState({
        currentData: 0,
      })
    } else {
      this.setState({
        currentData: this.state.currentData + 1
      })
    }
  }

  prevDataSet() {
    if (this.state.currentData ===  0) {
      this.setState({
        currentData: this.state.cardData.length - 1,
      })
    } else {
      this.setState({
        currentData: this.state.currentData - 1
      })
    }
  }

  componentDidMount() {
    // setInterval(() => this.decrementTimer(), 1000)
    this.setState({currentData: this.randomNum()})
  }

  render() {
    const { changeView } = this.props
    return (
      <Row onClick={() => this.resetTimer()}>
        <Row>
        <Col l={3}></Col>
        <Col l={12} m={12} s={12}>
          <div className="initial-project"
            onClick={() => changeView('home')}
            style={ {
               height: 80
             } }
          >
            <div className="initial1project">JS</div>
          </div>
        </Col>
        </Row>
        <Col l={3} m={2} s={1}></Col>
        <Col l={1} m={1} s={1}>
          <div className="nextProj button-right" onClick={() => this.prevDataSet()}><Icon small>chevron_left</Icon></div>
        </Col>
        <Col l={4} m={6} s={8}>
          <a rel="noopener noreferrer" target="_blank" href={this.state.cardData[this.state.currentData].href}>
            <img className="card-image" src={this.state.cardData[this.state.currentData].imgSrc} width="100%" alt="Niwot Barber"/>
          </a>
          <div className="card-footer">
            <div className="center-align pro-title">
              {this.state.cardData[this.state.currentData].title}
            </div>
            <Row>
              <div className="fixed-buttons">
                <Col l={6} m={6} s={6} className="center-align">
                  <Button className="data" href="#" onClick={() => this.changeDataType('about')}>About</Button>
                </Col>

                <Col l={6} m={6} s={6} className="center-align">
                  <Button className="data" href="#" onClick={() => this.changeDataType('features')}>Features</Button>
                </Col>
              </div>
            </Row>
            <Col l={12} className="text-container">
              <p>{this.state.cardData[this.state.currentData][this.state.dataType]}</p>
            </Col>
          </div>
        </Col>
        <Col l={1} m={1} s={1}>
          <div className="nextProj button-left" onClick={() => this.nextDataSet()}><Icon small>chevron_right</Icon></div>
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
)(Projects);
