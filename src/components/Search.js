import React, { Component } from 'react';
import { Container, Button, Grid, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'
import CameraOptions from './CameraOptions'
import ChooseDateType from './ChooseDateType'
import RoverPic from './RoverPic'
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
      dateType: "",
      show: "route",
      stepThree: ""
    }
    EventEmitter.subscribe('getDateInput', (event) => this.handleChange(event))
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
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
    if (this.state.camera !== "all"){
      url =  `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date}&camera=${camera}&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`
    } else {
      url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date}&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`
    }

    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
      console.log(this.state.photos)
    }

  handleClick = (event) => {
    this.setState({show: event.target.name})
  }

  render(){

    //show get photos button after inputs for rover & camera
    let photos = this.state.photos
    let rover = this.state.rover
    let results
    let buttons
    let getPhotosButton
    if (rover && this.state.camera) {
      getPhotosButton =  <Button size="large" color="brown" onClick={this.fetchPics} disabled={!this.state.camera}>Get Photos</Button>
    }

    //show default pic before search, results after
    if (photos.length > 0) {
      results =
      <>
        <h3>found {photos.length} photos</h3>
        <p>
        <em>
          seeing double? many of the images are stereographic, taken at the same time by two cameras that are slightly offset.
          <br/>
          <a href="https://www.instructables.com/id/How-to-view-stereo-graphic-images/">How to view them</a>
        </em>
        </p>
      </>
    }


    // after step 1 input, show step 2
    let stepTwo
    if (rover){
      console.log(this.state)
      buttons =
      <>
        <Button name="route" onClick={this.handleClick}> Route </Button>
        <Button name="cameras" onClick={this.handleClick}> Cameras </Button>
      </>
      stepTwo = <ChooseDateType />
    }

    // after step 2 input, show cameras pic and step 3
    let date = this.state.sol || this.state.earth_date
    let stepThree
    if (date) {
      stepThree =
      <>
        <label>
         <h2> Step 3</h2><br/>
         <select className="select" name="camera" camera={this.state.camera} onChange={this.handleChange}>
          <option disabled selected value> Pick a Camera </option>
           <CameraOptions rover={this.state.rover} />
         </select>
       </label>
       <h4>Which cameras are which? <br/>
       Click the "cameras" button below to find out.</h4>
      </>
    }


    return (
        <Container className="center search">
          <br/>
          <br/>
          <br/>
          <div className="massive">
            Search Mars Rover Photos
          </div>
          <br/>
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
                {stepTwo}
              </Grid.Column>
              <Grid.Column>
                {stepThree}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          </form>
          <br/>
          <br/>
          <hr/>
          {getPhotosButton}

          <br/>

          <br/>
          <br/>
          <br/>
          <div className="center">
            {results}
            {buttons}
            <RoverPic photos={this.state.photos} rover={this.state.rover} show={this.state.show}/>
          </div>
          <br/>
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
          <br/>
          <br/>
          <br/>

      </Container>
    )

  }


}
export default Search
