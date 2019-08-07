import React, { Component } from 'react';
import { Container, Button, Card } from 'semantic-ui-react'
import PhotoCard from './PhotoCard'



class NavCam extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: [],
      search: ''

    }
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  fetchPics = () => {
    const sol = this.state.search
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=navcam&page-1&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`

    fetch(url)
      .then(response => response.json())
      .then(photos => this.setState({photos: photos["photos"]}))
    }



  render(){
    console.log('this.state.photos is', )

    return (
      <Container className="center">
        <br/>
        <h1>
          NavCam pics
        </h1>

        <form>
          <input
            id="sol"
            type="text"
            placeholder="enter sol"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </form>

        <Button size="big" color="orange" onClick={this.fetchPics}>See NavCam Pics</Button>
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
export default NavCam
