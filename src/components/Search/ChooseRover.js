import React, { PureComponent } from 'react'
import { EventEmitter } from './events.js'

class ChooseRover extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      rover: "",
      width: window.innerWidth
    }
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

  render() {

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    let style
    isMobile ? style = "select-mobile" : style = "select-fullscreen"


    return (
      <>
        <label>
         <h2> Step 1 </h2><br/>
         <select
            className={style}
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
