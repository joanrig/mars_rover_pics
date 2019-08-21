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
    // debugger
    // const value = event.target.value
    // const name = event.target.name
    // this.setState({[name]: value})


  handleChange(event, type) {
    let newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  }


  handleSubmit = () => {
    debugger
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
        <form
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}>
          {dateInput}
        </form>
      </>
    )
  }
}


export default connect(null, { setDate })(DateInput)
