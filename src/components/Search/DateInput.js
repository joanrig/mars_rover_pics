import React, {Component} from 'react'
import { EventEmitter } from './events.js'



class DateInput extends Component {

  state = {
    sol:"",
    earth_date:"",
    width: window.innerWidth
  }

  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange);
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange);
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth });
   }

  handleChange = (event) => this.setState({ rover: event.target.value })

  handleChange = (event) => {
    const target = event.target;
    const value = target.value
    const name = target.name;
    this.setState({[name]: value})

  }


  render() {

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    let dateStyle

    isMobile? dateStyle = "date-input-mobile" : dateStyle = "date-input-fullscreen"


    let dateInput = ""

    if (this.props.dateType === "sol") {
      dateInput =
          <input
            className={dateStyle}
            name="sol"
            type="number"
            placeholder="enter sol"
            value={this.state.sol}
            onChange={(event) => EventEmitter.dispatch('getDateInput', event)}
          />

    } else if (this.props.dateType === "earth_date") {
      dateInput =
        <input
          className={dateStyle}
          name="earth_date"
          type="text"
          placeholder="YYYY-MM-DD"
          value={this.state.earth_date}
          onChange={(event) => EventEmitter.dispatch('getDateInput', event)}
        />
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
