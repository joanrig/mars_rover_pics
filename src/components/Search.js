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
    debugger
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
               <h2> Step 1 </h2><br/>
               <select className="select" name="rover" rover={this.state.rover} onChange={this.handleChange} >
                 <option disabled selected value> Pick a Rover </option>
                 <option value="curiosity">Curiosity</option>
                 <option value="spirit">Spirit</option>
                 <option value="opportunity">Opportunity</option>
               </select>
             </label>
            </Grid.Column>
            <Grid.Column>
              <ChooseDateType />
            </Grid.Column>
            <Grid.Column>
              <label>
               <h2> Step 3</h2><br/>
               <select className="select" name="camera" camera={this.state.camera} onChange={this.handleChange}>
                <option disabled selected value> Pick a Camera -- </option>
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

        <Button size="large" color="grey" onClick={this.fetchPics}>Get Photos</Button>

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
