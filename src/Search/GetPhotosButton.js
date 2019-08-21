import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { fetchPics } from './SearchActions'


class GetPhotosButton extends Component {


  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }

  setURL = () => {
    let rover = this.props["rover"]
    let camera = this.props["camera"]
    let date = this.props["date"]


    let url
    if (this.props.camera !== "all"){
      url =  `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date}&camera=${camera}&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`
    } else {
      url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${date}&api_key=uzuLTi3MlfUUzqIPjnTuq1geIzqCR3tbkwcEQ98d`
    }

    this.props.fetchPics(url)
  }

  render() {

    return (
      <Button size="large" color="brown" onClick={this.setURL} disabled={!this.props.camera}>Get Photos</Button>
      )
    }
  }


const mapStateToProps = state => ({ camera: state.camera, rover: state.rover, date:state.date })

export default (connect)(mapStateToProps, { fetchPics })(GetPhotosButton)
