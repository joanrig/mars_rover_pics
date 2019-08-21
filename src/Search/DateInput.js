import React, {Component} from 'react'
import { connect } from 'react-redux'


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

    this.setState({ date: date })
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

    } else if (this.props.dateType === "earth_date") {
      dateInput =
        <input
          className="center earth-date dates"
          name="earth_date"
          type="text"
          placeholder="YYYY-MM-DD"
          value={this.state.earth_date}
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

const mapStateToProps = state => ({ date: state.date })

export default connect(mapStateToProps)(DateInput)
