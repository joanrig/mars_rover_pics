import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'
import rovergraphic from './rovergraphic.png'


class RoversContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      rover: ""
    }

  }

  render(){

    let intro =
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="massive">One red planet, four rovers</div>
      <br/>
      <br/>
      <br/>
      <p>
        NASA has successfully landed four rovers on Mars: Sojourner, Spirit, Opportunity and Curiosity. On this site you can browse more than 350,000 photos taken by Spirit, Opportunity and Curiosity. They include selfies(!), sandy terrain, rocky terrain, sunsets and close-ups of rock samples.
      </p>
      <p>
        (<em>Note: this site is powered by NASA's Mars Rover API; It does not include photos from Sojourner, but you can <a href="https://www.nasa.gov/mission_pages/mars-pathfinder">find some here.</a></em>)
      </p>
      <br/>
      <h1> Fast Facts </h1>
      <p>
        Here is a graphical overview of the four Mars Rovers, comparing many of their attributes, including mission, size, speed and intended lifespan.
      </p>
    </>

      const drillingVideo =
      <iframe
        title="unique"
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/B5TWtxRvydE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>


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
      <div className="center">
        <br/>
        <h1>How does a robot get and study a rock sample?</h1>
        <br/>
        <br/>
        {drillingVideo}

      </div>

    </>

    )

  }


}
export default RoversContainer
