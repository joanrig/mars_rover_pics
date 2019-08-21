import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  } from 'semantic-ui-react'
import CameraOptions from './CameraOptions'


class ChooseCamera extends Component {
  constructor(props){
    super(props)

    this.state = {
      camera: ""
    }
  }

  handleSelect = (event) => {
    this.props.setCamera(event.target.value)
  }


  render() {


    return (
      <>
        <label>
         <h2> Step 3</h2><br/>
         <select
          className="select"
          name="camera"
          camera={this.state.camera}
          onChange={this.handleSelect}>
          <option disabled selected value> Pick a Camera </option>
          <CameraOptions rover={this.props.rover} />
         </select>
        </label>
        <h4>Which cameras are which? <br/>
        Click the "cameras" button below to find out.</h4>
      </>
    )
  }
}


const mapStateToProps = state => ({ rover: state.rover })


export default connect(mapStateToProps)(ChooseCamera)
