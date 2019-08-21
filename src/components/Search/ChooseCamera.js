import React, { Component } from 'react'
import { EventEmitter } from './events.js'

class ChooseCamera extends Component {
  constructor(props){
    super(props)

    this.state = {
      camera: "",
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

  handleChange = (event) => this.setState({ camera: event.target.value })

  render() {

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    let style
    isMobile ? style = "camera-dropdown-mobile" : style = "camera-dropdown-fullscreen"

    let options = ""
    if (this.props.rover === "spirit" || this.props.rover === "opportunity") {
      options =
      <>
        <option value="navcam">NavCam</option>
        <option value="fhaz">Front Hazard Avoidance Camera</option>
        <option value="rhaz">Rear Hazard Avoidance Camera</option>
        <option value="pancam">Panoramic Camera</option>
        <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
        <option value="all">All Cameras</option>

      </>
    } else if (this.props.rover === "curiosity") {
      options =
      <>
        <option value="navcam">NavCam</option>
        <option value="fhaz">Front Hazard Avoidance Camera</option>
        <option value="rhaz">Rear Hazard Avoidance Camera</option>
        <option value="mast">Mast Camera</option>
        <option value="chemcam">Chemistry and Camera Complex	</option>
        <option value="mahli">Mars Hand Lens Imager</option>
        <option value="mardi">Mars Descent Imager</option>
        <option value="all">All Cameras</option>
      </>
    }

    return (
      <>
        <label>
         <h2> Step 3</h2><br/>
         <br/>
         <select
          className={style}
          name="camera"
          camera={this.state.camera}
          onChange={(event) => EventEmitter.dispatch('getCameraInput', event)}>

          <option disabled selected value>
            Pick a Camera
          </option>

          {options}

         </select>
        </label>
        <h4>Which cameras are which? <br/>
        Click the "cameras" button below to find out.</h4>
      </>
    )
  }
}


export default ChooseCamera
