import React, { Component } from 'react';
import { Container, Button, Grid, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'
import CameraOptions from './CameraOptions'


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


    return (
        <Container className="center">
        <br/>
        <h1>
          Search Mars Rover Photos
        </h1>
        <br/>
        <br/>
        <br/>

        <form>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <label>
               <h2> Step 1. Pick a rover</h2><br/>
               <select className="select" name="rover" rover={this.state.rover} onChange={this.handleChange} >
                 <option disabled selected value> -- select an option -- </option>
                 <option value="curiosity">Curiosity</option>
                 <option value="spirit">Spirit</option>
                 <option value="opportunity">Opportunity</option>
               </select>
             </label>
            </Grid.Column>
            <Grid.Column>
            <h2>Step 2. Pick a date</h2>
            <label>
              Earth date:<br/>
              <input
                name="earth_date"
                type="text"
                placeholder="YYYY-MM-DD"
                value={this.state.earth_date}
                onChange={this.handleChange}
                className="center"
              />
              </label>
              <br/>
              <br/>
              <br/>
              <label>
                Enter sol:<br/>
                <input
                  name="sol"
                  type="number"
                  placeholder="enter sol"
                  value={this.state.sol}
                  onChange={this.handleChange}
                  className="center"
                />
              </label>
            </Grid.Column>
            <Grid.Column>
              <label>
               <h2> Step 3. Pick a camera</h2><br/>
               <select className="select" name="camera" camera={this.state.camera} onChange={this.handleChange}>
                <option disabled selected value> -- select an option -- </option>
                 <CameraOptions rover={this.state.rover} />
               </select>
             </label>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        </form>
        <br/>
        <br/>


        <Button size="big" color="orange" onClick={this.fetchPics}>Get Photos</Button>

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