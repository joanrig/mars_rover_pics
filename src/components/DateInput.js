import React, {Component} from 'react'
import Search from './Search'



class DateInput extends Component {

  state = {
    sol:"",
    earth_date:""
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
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          className="center"
        />
        </label>
    }

    return (
      <>
        {dateInput}
      </>
    )
  }
}

export default DateInput
