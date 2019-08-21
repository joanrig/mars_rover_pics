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

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }



  render() {



    return (
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
    )
  }
}


const mapStateToProps = state => ({ camera: state.camera })


export default connect(mapStateToProps)(ChooseCamera)
