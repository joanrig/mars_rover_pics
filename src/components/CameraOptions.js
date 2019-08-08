import React, { PureComponent } from 'react';



class CameraOptions extends PureComponent  {
  render(){

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
        {options}
      </>
    )

  }


}
export default CameraOptions
