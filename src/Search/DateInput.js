import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setDate } from './SearchActions'


class DateInput extends Component {

  state = {
    sol:"",
    earthDate:"",
    dateType: "",
    date: ""
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }

  handleSubmit = () => {
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
            onChange={this.handleChange}
          />

    } else if (this.props.dateType === "earthDate") {
      dateInput =
        <input
          className="center earth-date dates"
          name="earthDate"
          type="text"
          placeholder="YYYY-MM-DD"
          value={this.state.earthDate}
          onChange={this.handleChange}
        />
    }

    return (
      <>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          {dateInput}
        </form>
      </>
    )
  }
}


export default connect(null, { setDate })(DateInput)
