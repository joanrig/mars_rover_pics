import React, { Component } from 'react';
import { Container, Image, Button } from 'semantic-ui-react'
import Intro from '../components/Intro'
import rovergraphic from './rovergraphic.png'
import SpiritVideo from '../components/SpiritVideo'
import SevenMinutesVideo from '../components/SevenMinutesVideo'
import SojournerVideo from '../components/SojournerVideo'
import OpportunityVideo from '../components/OpportunityVideo'


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
    } else if (this.state.show === "spirit"){
      onDisplay = <SpiritVideo />
    } else if (this.state.show === "terror"){
      onDisplay = <SevenMinutesVideo />
    } else if (this.state.show === "sojourner"){
      onDisplay = <SojournerVideo />
    } else if (this.state.show === "opportunity"){
      onDisplay = <OpportunityVideo />
    }

    return (
    <>
      <Container className="center" >
        <Intro />
        <h1 className="center"> Fast Facts & Short Videos</h1>
        <br/>
        <Button color="yellow" name="chart" onClick={this.handleClick} >
          Compare
        </Button>
        <Button color="orange" name="sojourner" onClick={this.handleClick} >
          Sojourner
        </Button>
        <Button color="grey" name="spirit" onClick={this.handleClick} >
          Spirit
        </Button>
        <Button className="video" color="brown" name="opportunity" onClick={this.handleClick} >
          Opportunity
        </Button>
        <Button color="blue" name="terror" onClick={this.handleClick} >
          Curiosity
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
