import React, {Component} from 'react'
import { EventEmitter } from './events.js'



class DateInput extends Component {

  state = {
    sol:"",
    earth_date:""
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value
    const name = target.name;
    this.setState({[name]: value})

  }


  render() {

    let dateInput = ""

    if (this.props.dateType === "sol") {
      dateInput =
        <label>
          Enter sol:<br/>
          <input
            name="sol"
            type="number"
            placeholder="enter sol"
            value={this.state.sol}
            onChange={(event) => EventEmitter.dispatch('getDateInput', event)}
            className="center"
          />
        </label>
    } else if (this.props.dateType === "earth_date") {
      dateInput =
        <label>
          Earth date:<br/>
        <input
          name="earth_date"
          type="text"
          placeholder="YYYY-MM-DD"
          value={this.state.earth_date}
          onChange={(event) => EventEmitter.dispatch('getDateInput', event)}
          className="center"
        />
        </label>
    }

    return (
      <>
        <form
          onChange={this.handleChange}
          onSubmit={(event) => EventEmitter.dispatch('getDateInput', event)}>
          {dateInput}
        </form>
      </>
    )
  }
}

export default DateInput
