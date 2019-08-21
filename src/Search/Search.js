import React, { Component } from 'react';
import { Container, Button, Grid, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'
import ChooseCamera from './ChooseCamera'
import ChooseDateType from './ChooseDateType'
import RoverPic from './RoverPic'


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      stepThree: ""
    }
  }



  

  handleClick = (event) => {
    this.setState({show: event.target.name})
  }

  render(){



    //show get photos button after inputs for rover & camera
    let results

    let getPhotosButton
    if (rover && this.props.camera) {
      getPhotosButton =  <GetPhotosButton />

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
    if (this.props.rover){
      stepTwo = <ChooseDateType />
    }

    // after step 2 input, show cameras pic and step 3
    let stepThree
    if (this.props.date) {
      stepThree = <ChooseCamera />
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
            <RoverPic rover={this.props.rover} photos={this.props.photos}/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Card.Group itemsPerRow={2}>
            {this.props.photos.map(photo =>
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
