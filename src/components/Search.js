import React, { Component } from 'react';
import { Container, Image, Button, Card } from 'semantic-ui-react'
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
      dateType: "",
      show: "route",
      showStepThree: ""
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
    }

  handleClick = (event) => {
    this.setState({show: event.target.name})
  }

  handleSubmitDate = () => {
    console.log('date submitted!!!!!!!!!!!!!!!!!!!')
    console.log('this.state.showStepThree is', this.state.showStepThree)
    this.setState({showStepThree: true})
    console.log('i just reset state to showStepThree is true, check it out it is', this.state.showStepThree)


  }


  render(){


    let stepOne =
      <label>
       <h2> Step 1 </h2><br/>
       <select className="select" name="rover" rover={this.state.rover} onChange={this.handleChange} >
         <option disabled selected value> Pick a Rover </option>
         <option value="curiosity">Curiosity</option>
         <option value="spirit">Spirit</option>
         <option value="opportunity">Opportunity</option>
       </select>
     </label>
     let showStep = stepOne


    let photos = this.state.photos
    let rover = this.state.rover
    let show = this.state.show
    let roverPic


    let curiosityCams = <Image src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA15952_hires.jpg" />
    let curiosityRoute = <Image src="https://mars.nasa.gov/msl/imgs/2019/07/MSL_TraverseMap_Sol2480-full.jpg" />
    let spiritOpportunityCams = <Image src="https://marsmobile.jpl.nasa.gov/imgs/mer/rover/mer-instruments-labels.jpg" />
    let opportunityRoute = <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/MERB_878.jpg/700px-MERB_878.jpg" />
    let spiritRoute = <Image src="https://mars.nasa.gov/mer/mission/tm-spirit/images/MERA_Sol2518_1.jpg" />

    //show route / camera pics on rover choice
    if (photos.length === 0) {
      if (rover === "curiosity"){
        if (show === "cameras"){
          roverPic = curiosityCams
        } else if (show === "route"){
          roverPic = curiosityRoute
        }
      } else if (rover === "opportunity"){
        if (show === "cameras"){
          roverPic = spiritOpportunityCams
        } else if (show === "route"){
          roverPic = opportunityRoute
        }
      } else if (rover === "spirit"){
        if (show === "cameras"){
          roverPic = spiritOpportunityCams
        } else if (show === "route"){
          roverPic = spiritRoute
        }
      }
    }

    //show get photos button after inputs for rover & camera
    let results
    let buttons
    let getPhotosButton
    if (rover && this.state.camera) {
      getPhotosButton =
        <Button
          size="large"
          color="brown"
          onClick={this.fetchPics}
          disabled={!this.state.camera}
        >
          Get Photos
        </Button>
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
    console.log('at start of step two, this.state is', this.state)
    if (rover){
      buttons =
      <>
        <Button name="route" onClick={this.handleClick}> Route </Button>
        <Button name="cameras" onClick={this.handleClick}> Cameras </Button>
      </>
      stepTwo = <ChooseDateType />
      showStep = stepTwo
    }

    // after step 2 input, show button to submit date
    let submitDate
    if (this.state.sol || this.state.earth_date) {
      submitDate = <Button onClick={this.handleSubmitDate}>submit</Button>
    }

    let stepThree
      if (this.state.showStepThree) {
        console.log('at start of step 3, this.state is', this.state)
        showStep = stepThree
        stepThree =
        <>
          <label>
           <h2> Step 3</h2><br/>
           <select
            className="select camera"
            name="camera"
            camera={this.state.camera}
            onChange={this.handleChange}>
            <option disabled default value> Pick a Camera </option>
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
          <div className="content">
            {showStep}
            {submitDate}
          </div>

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
            {roverPic}
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
