import React, { Component } from 'react'
import { EventEmitter } from './events.js'

class ChooseRover extends Component {
  constructor(props){
    super(props)

    this.state = {
      rover: ""
    }
  }

  handleChange = (event) => this.setState({ rover: event.target.value })

  render() {


    return (
      <>
        <label>
         <h2> Step 1 </h2><br/>
         <select
            className="select"
            name="rover"
            rover={this.state.rover}
            onChange={(event) => EventEmitter.dispatch('getDateInput', event)} >
            
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


export default ChooseRover
