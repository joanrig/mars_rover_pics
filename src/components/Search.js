import React, { Component } from 'react';
import { Container, Button, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'



class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: [],
      rover: "",
      camera: "",
      sol: "1000",
      earth_date: ""
    }
  }


  handleChange = (event) => {
    const target = event.target;
    console.log('target is', target)
    const value = target.value.toLowerCase();
    console.log('value is', value)
    const name = target.name;
    console.log('name is', name)
    this.setState({[name]: value})

  }

  fetchPics = () => {
    const rover = this.state["rover"]
    const camera = this.state["camera"]
    const sol = this.state["sol"]
    console.log(rover, camera, sol)
    const url = 
    console.log(url)
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
          Search Mars Rover Photos
        </h1>

        <form>
          <input
            name="rover"
            type="text"
            placeholder="enter rover"
            value={this.state.rover}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <br/>
          <input
            name="sol"
            type="number"
            placeholder="enter sol"
            value={this.state.sol}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <label>
           Pick a camera<br/>
           <select name="camera" camera={this.state.camera} onChange={this.handleChange}>
             <option value="navcam">NavCam</option>
             <option value="fhaz">Front Hazard Avoidance Camera</option>
             <option value="rhaz">Rear Hazard Avoidance Camera</option>
           </select>
         </label>
        </form>
        <br/>
        <br/>
        <br/>

        <Button size="big" color="orange" onClick={this.fetchPics}>Find Photos</Button>
        <br/>
        <br/>
        <br/>
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
export default Search
