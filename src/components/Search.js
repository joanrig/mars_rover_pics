import React, { Component } from 'react';
import { Container, Button, Grid, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'
import CameraOptions from './CameraOptions'
import ChooseDateType from './ChooseDateType'
import { EventEmitter } from './events.js'


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: [],
      rover: "",
      camera: "",
      sol: "",
      earth_date: "",
      dateType: ""
    }
    EventEmitter.subscribe('getDateInput', (event) => this.handleChange(event))
  }

  handleChange = (event) => {
    console.log(event)
    const target = event.target;
    const value = target.value.toLowerCase();
    const name = target.name;
    this.setState({[name]: value})

  }

  fetchPics = () => {
    const rover = this.state["rover"]
    const camera = this.state["camera"]

    let date = ""
    if (this.state.sol > 0) {
      date = `sol=${this.state.sol}`
    } else if (this.state.earth_date){
      date = `earth_date=${this.state.earth_date}`
    }

    let url = ""


    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
    }



  render(){
    console.log('inside search render, this.state.photos is', this.state.photos)
    let photos = this.state.photos

    let photoCount = ""
    if (photos.length > 0) {
      photoCount = <h3>found {photos.length} photos</h3>
    }

    // let number = ""
    // if ( photos.length > 0  && photos.length < 50 ){
    //   number = 1
    // } else {
    //   number = 2
    // }





//comes after you get the photos so useless for search
    // let chosenRover = ""
    // let landingDate = ""
    // let launchDate = ""
    // let maxDate = ""
    // let maxSol = ""
    // if(this.state.photos[0]){
    //  chosenRover = this.state.photos[0]["rover"]
    //  landingDate = chosenRover["landing_date"]
    //  launchDate = chosenRover["launch_date"]
    //  maxDate = chosenRover["max_date"]
    //  maxSol = chosenRover["max_sol"]
    //
    // }


    return (
        <Container className="center search">
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
                 <h2> Step 1 </h2><br/>
                 <select className="select" name="rover" rover={this.state.rover} onChange={this.handleChange} >
                   <option disabled selected value> Pick a Rover </option>
                   <option value="curiosity">Curiosity</option>
                   <option value="spirit">Spirit</option>
                   <option value="opportunity">Opportunity</option>
                 </select>
               </label>
              </Grid.Column>
              <Grid.Column >
                <ChooseDateType />
              </Grid.Column>
              <Grid.Column>
                <label>
                 <h2> Step 3</h2><br/>
                 <select className="select" name="camera" camera={this.state.camera} onChange={this.handleChange}>
                  <option disabled selected value> Pick a Camera </option>
                   <CameraOptions rover={this.state.rover} />
                 </select>
               </label>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          </form>
          <br/>
          <br/>
          <hr/>


          <br/>

          <Button size="large" color="grey" onClick={this.fetchPics} disabled={!this.state.camera}>Get Photos</Button>
          <br/>
          {photoCount}
          <br/>
          <br/>

          <Card.Group itemsPerRow={2}>
            {this.state.photos.map(photo =>
              <PhotoCard
                key={photo["id"]} {...photo} />
              )}
          </Card.Group>
          <br/>
          <br/>
          <br/>

      </Container>
    )

  }


}
export default Search
