import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  } from 'semantic-ui-react'


class ChooseRover extends Component {
  constructor(props){
    super(props)

    this.state = {
      rover: ""
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
         <h2> Step 1 </h2><br/>
         <select className="select" name="rover" rover={this.state.rover} onChange={this.handleChange} >
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


const mapStateToProps = state => ({ rover: state.rover })

export default connect(mapStateToProps)(ChooseRover)
