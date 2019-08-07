import React, { Component } from 'react';
import { Container, Button, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'



class NavCam extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: [],
      rover: "curiosity",
      camera: "navcam",
      sol: "1000",
      earth_date: ""
    }
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value.toLowerCase();
    const name = target.name;
    this.setState({[name]: value})
  }

  fetchPics = () => {
    const rover = this.state["rover"]
    const camera = this.state["camera"]
    const sol = this.state["sol"]
    console.log(rover, camera, sol)
    const url = 

    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
    }



  render(){
    console.log('this.state.photos is', )

    return (
      <Container className="center">
        <br/>
        <h1>
          NavCam pics
        </h1>

        <form>
          <label>
            Pick a Mars Rover <br/>
            <select value={this.state.rover.value} onChange={this.handleChange}>
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </select>
          </label>
          <br/>
          <br/>
          <br/>

          <input
            name="sol"
            type="text"
            placeholder="enter sol"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </form>
        <br/>
        <br/>
        <br/>

        <Button size="big" color="orange" onClick={this.fetchPics}>See NavCam Pics</Button>
        <br/>

        <Card.Group itemsPerRow={2}>
        {this.state.photos.map(photo =>
          <PhotoCard
            key={photo["id"]} {...photo} />
          )}
      </Card.Group>
      </Container>
    )

  }


}
export default NavCam
