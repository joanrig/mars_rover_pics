import React, { Component } from 'react';
import { Container, Image, Button } from 'semantic-ui-react'
import Intro from '../components/Intro'
import rovergraphic from './rovergraphic.png'
import DrillingVideo from '../components/DrillingVideo'
import SevenMinutesVideo from '../components/SevenMinutesVideo'


class RoversContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      rover: "",
      show: "chart"
    }
  }

  handleClick = (event) => {
    this.setState({show: event.target.name})
  }

  render(){

    let onDisplay = ""
    if (this.state.show === "chart"){
      onDisplay =
      <>
        <Image className="roverGraphic" src={rovergraphic} />
        <figcaption className="center" >Graphic by NASA's Jet Propulsion Laboratory</figcaption>
      </>
    } else if (this.state.show === "drill"){
      onDisplay =
      <div className="center">
        <br/>
        <DrillingVideo />
      </div>
    } else if (this.state.show === "terror"){
      onDisplay =
      <>
        <SevenMinutesVideo />
      </>
    }

    return (
    <>
      <Container className="center" >
        <Intro />
        <h1 className="center"> Fast Facts </h1>
        <br/>
        <Button name="chart" onClick={this.handleClick} >
          Compare
        </Button>
        <Button color="blue" name="terror" onClick={this.handleClick} >
          Landing
        </Button>
        <Button color="grey" name="drill" onClick={this.handleClick} >
          Drilling
        </Button>
        <br/>
      </Container>

      {onDisplay}
      <br/>
      <br/>
      <br/>
      <br/>
    </>

    )
  }
}
export default RoversContainer
