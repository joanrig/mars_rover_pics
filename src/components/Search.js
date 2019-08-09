import React, { Component } from 'react';
import { Container, Image, Button, Grid, Card } from 'semantic-ui-react'
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
  

    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
    }


  render(){
    let photos = this.state.photos

    let results = ""
    if (photos.length > 0) {
      results =
      <>
        <h3>found {photos.length} photos</h3>
        <p><em>seeing double? many of the images are stereographic, taken at the same time by two cameras that are slightly offset. <a href="https://www.instructables.com/id/How-to-view-stereo-graphic-images/">How to view them</a></em></p>
      </>
    } else if (photos.length === 0 && !this.state.rover) {
        results = <Image src="https://mars.nasa.gov/system/news_items/main_images/8414_1_MAIN_mars-rover-opportunity-tracks-Sol3754B-pia18605-CROPPED.jpg" />
    } else if (photos.length === 0 && this.state.rover === "curiosity"){
        results =
        <>
          <Image src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA15952_hires.jpg" />
          <br/>
          <br/>
          <h1>Curiosity's Route</h1>
          <Image src="https://mars.nasa.gov/msl/imgs/2019/07/MSL_TraverseMap_Sol2480-full.jpg" />
        </>
    } else if (photos.length === 0 && (this.state.rover ===  "opportunity")){
        results =
        <>
          <Image src="https://marsmobile.jpl.nasa.gov/imgs/mer/rover/mer-instruments-labels.jpg" />
          <br/>
          <br/>
          <h1>Opportunity's Route</h1>
          <div >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/MERB_878.jpg/700px-MERB_878.jpg" />
          </div>
        </>
    } else if (photos.length === 0 && (this.state.rover ===  "spirit")){
        results =
        <>
          <Image src="https://marsmobile.jpl.nasa.gov/imgs/mer/rover/mer-instruments-labels.jpg" />
          <br/>
          <br/>
          <h1>Spirit's Route</h1>
          <Image src="https://mars.nasa.gov/mer/mission/tm-spirit/images/MERA_Sol2518_1.jpg" />
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

          <Button size="large" color="brown" onClick={this.fetchPics} disabled={!this.state.camera}>Get Photos</Button>
          <br/>
          <br/>
          <br/>
          <div className="center">
            {results}
          </div>
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
