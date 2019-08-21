import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRover } from './SearchActions'


class ChooseRover extends Component {
  constructor(props){
    super(props)

    this.state = {
      rover: ""
    }
  }

  handleSelect = (event) => {
    this.props.setRover(event.target.value)
  }

  render() {

    return (
      <>
        <label>
         <h2> Step 1 </h2><br/>
         <select className="select" name="rover" rover={this.state.rover} onChange={this.handleSelect} >
           <option disabled selected value> Pick a Rover </option>
           <option value="curiosity">Curiosity</option>
           <option value="spirit">Spirit</option>
           <option value="opportunity">Opportunity</option>
         </select>
        </label>
      </>
    )
  }
}



export default connect(null, { setRover })(ChooseRover)
