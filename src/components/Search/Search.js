import React, { Component } from 'react';
import { Container, Button, Grid, Card, Loader } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'
import ChooseDateType from './ChooseDateType'
import ChooseRover from './ChooseRover'
import ChooseCamera from './ChooseCamera'
import RoverPic from './RoverPic'
import ResultsBanner from './ResultsBanner'
// import ErrorMessage from './ErrorMessage'
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
      showStep: 1,
      getPhotosButtonClicked: false,
      width: window.innerWidth
    }
    EventEmitter.subscribe('getRoverInput', (event) => this.handleChange(event))
    EventEmitter.subscribe('getDateInput', (event) => this.handleChange(event))
    EventEmitter.subscribe('getCameraInput', (event) => this.handleChange(event))
  }

  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange)
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange)
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth })
   }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }

  fetchPics = () => {
    this.setState({ getPhotosButtonClicked: true })
    let date = this.setDate()
    let url = this.setURL(date)

    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
      console.log(this.state.photos)
  }

  setDate = () => {
    let date
    if (this.state.sol > 0) {
      date = `sol=${this.state.sol}`
    } else if (this.state.earth_date){
      date = `earth_date=${this.state.earth_date}`
    }
    return date
  }

  setURL = (date) => {
    let rover = this.state.rover
    let camera = this.state.camera
    let url
    if (camera !== "all"){
      url =  `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date}&camera=${camera}&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`
    } else {
      url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date}&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`
    }
    return url
  }

  handleClick = (event) => {
    this.setState({show: event.target.name})
  }

  render(){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    let itemsPerRow
    isMobile? itemsPerRow = 1 : itemsPerRow = 2

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
      results = <ResultsBanner photos={this.state.photos} />
    }

    let stepOne = <ChooseRover rover={this.state.rover} />

    // after step 1 input, show step 2
    let stepTwo
    if (rover){
      buttons =
      <>
        <Button name="route" onClick={this.handleClick}> Route </Button>
        <Button name="cameras" onClick={this.handleClick}> Cameras </Button>
      </>
      stepTwo = <ChooseDateType rover={this.state.rover}/>
    }

    // after step 2 input, show cameras pic and step 3
    let date = this.state.sol || this.state.earth_date
    let stepThree
    if (date) {
      stepThree =
      <>
        <ChooseCamera rover={this.state.rover} />
      </>
    }

    //error message replaces getPhotosButton
    let noResults
    if (this.state.getPhotosButtonClicked && this.state.photos.length === 0 ){
      noResults = <Loader active inline />
    }


    return (
        <Container className="center search">
          <br/>
          <br/>

          <div className="massive">
            Search Mars Rover Photos
          </div>
            <h4>Powered by data from NASA's Mars Rover API</h4>
          <br/>
          <br/>
          <br/>

          <form>
            {stepOne}
            <br/>
            <br/>
            <br/>
            <Grid columns={2} divided>
              <Grid.Row>
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
          <hr/>
          {noResults}
          <br/>
          {getPhotosButton}
          <br/>
          <br/>
          <div className="center">
            {results}
          <br/>
          <br/>
            {buttons}
            <RoverPic photos={this.state.photos} rover={this.state.rover} show={this.state.show}/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Card.Group itemsPerRow={itemsPerRow}>
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
