import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setDate } from './SearchActions'


class DateInput extends Component {

  state = {
    sol:"",
    earthDate:"",
    dateType: "",
  }


  handleSolInput = (event) => this.handleChange(event, 'sol')
  handleEarthDateInput = (event) => this.handleChange(event, 'earthDate')

  //without async it does not capture last character of input
  handleChange = async function(event, type) {
    let newState = {};
    newState[type] = event.target.value;
    await this.setState(newState)
    console.log(this.state)
  }


  handleSubmit = (event) => {
    let date
    if (this.state.sol > 0) {
      date = `sol=${this.state.sol}`
    } else if (this.state.earthDate){
      date = `earthDate=${this.state.earthDate}`
    }

    this.props.setDate(date)
  }


  render() {

    let dateInput = ""

    if (this.props.dateType === "sol") {
      dateInput =
          <input
            className="center sol dates"
            name="sol"
            type="number"
            placeholder="enter sol"
            value={this.state.sol}
            onChange={this.handleSolInput}
          />

    } else if (this.props.dateType === "earthDate") {
      dateInput =
        <input
          className="center earth-date dates"
          name="earthDate"
          type="text"
          placeholder="YYYY-MM-DD"
          value={this.state.earthDate}
          onChange={this.handleEarthDateInput}
        />
    }

    return (
      <>
        <form id="getDate"
          onSubmit={this.handleSubmit}>
          {dateInput}
        </form>
      </>
    )
  }
}


export default connect(null, { setDate })(DateInput)
