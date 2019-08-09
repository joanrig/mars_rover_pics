import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'
import rovergraphic from './rovergraphic.png'
import DrillingVideo from '../components/DrillingVideo'


class RoversContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      rover: ""
    }

  }

  render(){

    let intro =
    <div className="intro">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="massive center">One red planet, four rovers</div>
      <br/>
      <br/>
      <br/>
      <p>
        NASA has successfully landed four rovers on Mars: Sojourner, Spirit, Opportunity and Curiosity. On this site you can browse more than 350,000 photos taken by Spirit, Opportunity and Curiosity. They include selfies(!), sandy terrain, rocky terrain, sunsets and close-ups of rock samples.
      </p>
      <p>
        (<em>Note: this site is powered by NASA's Mars Rover API; It does not include photos from Sojourner, but you can <a href="https://www.nasa.gov/mission_pages/mars-pathfinder">find some here.</a></em>)
      </p>
      <p>
        So what are the photos for? Scientists on earth meet daily to review the latest photos and use them to decide where to drive and where to drill. It's like operating a remote control car from millions of miles away (yikes!). When the scientists give a command, depending on conditions, it takes three to 22 minutes to reach the Rover, which then executes the command and sends back data on how things went. Imagine driving a remote control car and having to wait 44 minutes before knowing if your last command made it crash!
      </p>
      <br/>
      <br/>
      <h1 className="center"> Fast Facts </h1>
      <br/>
      <p>
        Here is a graphical overview of the four Mars Rovers, comparing many of their attributes, including mission, size, speed and intended lifespan.
      </p>
    </div>

    return (
    <>
      <Container className="center" >
        {intro}
        <br/>
        <br/>
        <br/>
      </Container>

      <Image className="roverGraphic" src={rovergraphic} />
      <figcaption className="center" >Graphic by NASA's Jet Propulsion Laboratory</figcaption>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="center">
        <br/>
        <br/>
        <div className="big">Robotic Geologist at Work</div>
        <br/>
        <br/>
        <br/>
        <DrillingVideo />
      </div>

    </>

    )

  }


}
export default RoversContainer
