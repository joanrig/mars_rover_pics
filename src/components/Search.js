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
      sol: "",
      earth_date: ""
    }
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.value.toLowerCase();
    const name = target.name;
    this.setState({[name]: value})

  }

  fetchPics = () => {
    const rover = this.state["rover"]
    const camera = this.state["camera"]
    const sol = this.state["sol"]
    const earthDate = this.state["earth_date"]

    let date = ""
    if (this.state.sol > 0) {
      date = `sol=${this.state.sol}`
    } else if (this.state.earth_date){
      date = `earth_date=${this.state.earth_date}`
    }

    console.log(rover, camera, sol, date, earthDate)
    const url =
    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
    }



  render(){
    console.log('this.state.rover is', this.state.rover)



    let options = ""
    if (this.state.rover === "spirit" || this.state.rover === "opportunity") {
      options =
      <>
        <option value="navcam">NavCam</option>
        <option value="fhaz">Front Hazard Avoidance Camera</option>
        <option value="rhaz">Rear Hazard Avoidance Camera</option>
        <option value="pancam">Panoramic Camera</option>
        <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
      </>
    } else if (this.state.rover === "curiosity") {
      options =
      <>
        <option value="navcam">NavCam</option>
        <option value="fhaz">Front Hazard Avoidance Camera</option>
        <option value="rhaz">Rear Hazard Avoidance Camera</option>
        <option value="mast">Mast Camera</option>
        <option value="chemcam">Chemistry and Camera Complex	</option>
        <option value="mahli">Mars Hand Lens Imager</option>
        <option value="mardi">Mars Descent Imager</option>
      </>

    }



    return (
      <Container className="center">
        <br/>
        <h1>
          Search Mars Rover Photos
        </h1>

        <form>
          <label>
           Pick a rover<br/>
           <select name="rover" rover={this.state.rover} onChange={this.handleChange}>
             <option value="curiosity">Curiosity</option>
             <option value="spirit">Spirit</option>
             <option value="opportunity">Opportunity</option>
           </select>
         </label>
          <br/>
          <br/>
          <br/>
          <h1>Enter earth date OR sol</h1>
          <input
            name="earth_date"
            type="text"
            placeholder="enter earth date as YYYY-MM-DD"
            value={this.state.earth_date}
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <br/>
          <label>
            Enter sol:
            <input
              name="sol"
              type="number"
              placeholder="enter sol"
              value={this.state.sol}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <br/>
          <label>
           Pick a camera<br/>
           <select name="camera" camera={this.state.camera} onChange={this.handleChange}>
             {options}
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

// <input
//   name="rover"
//   type="text"
//   placeholder="enter rover"
//   value={this.state.rover}
//   onChange={this.handleChange}
// />
