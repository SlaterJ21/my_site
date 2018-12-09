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
    duties: ['Express Sever Dev', 'PostgreSQL DB dev', 'UI/UX QA'],
    techs: ['React', 'React-materialize', 'PostgreSQL', 'Express.js', 'Node.js', 'HTML/CSS']
  },
  {
    title: "CleveRent",
    href: "#",
    imgSrc: require("../01img/app_shots/cleverent.png"),
    about: 'CleveRent was developed as a tool to expedite communication between Tenants and Property managers. The app was designed to support users ranging from homeowners renting single rooms to the managers of multi-unit properties. One of the highlighted features of the app are the live updates based on user input. I worked on this project with two partners Johnny Castillo and John Stephens-Webb. The three of us were a balanced team that took pride in planning and adapted well to      challenges. At the time we were all novice developers, but our teamwork and cohesion as a unit allowed us to deliver the mvp before the deadline.',
    duties: ['Express Sever Development', 'PostgreSQL DB Development', 'UI/UX Quality Assurance'],
    techs: ['Auth0', 'bcrypt', 'JWT', 'React', 'React-materialize', 'PostgreSQL', 'Express.js', 'Node.js', 'HTML/CSS']
  },
  {
    title: "Mobile Food Finder",
    href: "#",
    imgSrc: require("../01img/app_shots/mff2.png"),
    about: 'Transactional tool to keep track of orders. Owners can create new trucks, menu items and toggle status. Eaters can browse online trucks and place orders.',
    duties: ['Express Sever Dev', 'PostgreSQL DB dev', 'UI/UX QA'],
    techs: ['React-Native', 'Redux', 'Heroku', 'Auth0', 'bcrypt', 'React-materialize', 'PostgreSQL', 'Express.js', 'Node.js', 'HTML/CSS']
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

  formattedDuties() {
    return (
      <ul>
        {this.state.cardData ? this.state.cardData[this.state.currentData][this.state.dataType].map(duty => <li>{duty}</li>) : null}
      </ul>
    )
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
      <Row>

        <Row>
          <Col l={3}></Col>
          <Col l={12} m={12} s={12}>
            <div className="initial-project"
              onClick={() => changeView('home')}
              style={ {
                 height: 80
               } }>
            <div className="initial1project">JS</div>
            </div>
          </Col>
        </Row>

        <Col l={4} m={3} s={1}></Col>

        <Col l={4} m={6} s={10}>
            <div className="img-container">
              <div className="proj-button-left" onClick={() => this.prevDataSet()}>
                <div className="chev-left">
                  <Icon small>chevron_left</Icon>
                </div>
              </div>
              <img className="card-image" src={this.state.cardData[this.state.currentData].imgSrc} width="100%" alt="Niwot Barber"/>
              <div className="proj-button-right" onClick={() => this.nextDataSet()}>
                <div className="chev-right">
                  <Icon small>chevron_right</Icon>
                </div>
              </div>
            </div>
          <div className="card-footer" width="100%">
            <div className="center-align pro-title">
              <a href={this.state.cardData[this.state.currentData].href}>
                {this.state.cardData[this.state.currentData].title}
              </a>
            </div>
            <Row>
              <div className="fixed-proj-buttons">
                <Col l={4} m={4} s={4} className="center-align">
                  <Button className="data" href="#" onClick={() => this.changeDataType('about')}>About</Button>
                </Col>

                <Col l={4} m={4} s={4} className="center-align">
                  <Button className="data" href="#" onClick={() => this.changeDataType('duties')}>Duties</Button>
                </Col>

                <Col l={4} m={4} s={4} className="center-align">
                  <Button className="data" href="#" onClick={() => this.changeDataType('techs')}>Techs</Button>
                </Col>

              </div>
            </Row>
            <Col l={12} className="text-container">
             { this.state.dataType === 'duties' || this.state.dataType === 'techs' ?
               this.formattedDuties() :
                <p>{this.state.cardData[this.state.currentData][this.state.dataType]}</p>
              }
            </Col>
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
)(Projects);
