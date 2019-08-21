import React, { Component } from 'react';
import { Container, Image, Button, Grid, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'
import CameraOptions from './CameraOptions'
import ChooseDateType from './ChooseDateType'
import RoverPic from './RoverPic'


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      stepThree: ""
    }
  }



  fetchPics = () => {
    const rover = this.state["rover"]
    const camera = this.state["camera"]


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
    if (photos.length === 0 && !rover) {
        roverPic = <Image className="ui fluid image" src="https://mars.nasa.gov/system/news_items/main_images/8414_1_MAIN_mars-rover-opportunity-tracks-Sol3754B-pia18605-CROPPED.jpg" />
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
                <ChooseRover />
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
            <RoverPic rover={this.props.rover} photos={this.props.photos}/>
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
