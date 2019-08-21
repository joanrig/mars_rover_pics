import React, { Component } from 'react';
import { Container, Grid, Card } from 'semantic-ui-react'
import RoverPic from './RoverPic'
import ChooseRover from './ChooseRover'
import ChooseDateType from './ChooseDateType'
import ChooseCamera from './ChooseCamera'
import GetPhotosButton from './GetPhotosButton'
import PhotoCard from './PhotoCard'
import { connect } from 'react-redux'


class Search extends Component {

  handleSubmit


  render(){



    //show default pic before search, results after
    let results
    if (this.props.photos && this.props.photos.length > 0) {
      results =
      <>
        <h3>found {this.props.photos.length} photos</h3>
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
    // if (this.props.rover){
      stepTwo = <ChooseDateType />
    // }

    // after step 2 input, show cameras pic and step 3
    let stepThree
    // if (this.props.showStepThree) {
      stepThree = <ChooseCamera />
    // }

    //after inputs for rover & camera show get photos button
    let getPhotosButton
    if (this.props.rover && this.props.camera) {
      getPhotosButton =  <GetPhotosButton />
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
            {this.props.photos && this.props.photos.map(photo =>
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

const mapStateToProps = state => ({
  rover: state.rover,
  cameras: state.cameras,
  photos: state.photos,
  date: state.date
 })

export default (connect)(mapStateToProps)(Search)
