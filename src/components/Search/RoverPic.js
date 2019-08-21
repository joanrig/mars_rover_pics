import React, { PureComponent } from 'react';
import { Image } from 'semantic-ui-react'



class RoverPic extends PureComponent  {



  render(){

    console.log('hello from roverPic, this.props is', this.props)

    let photos = this.props.photos
    let rover = this.props.rover
    let show = this.props.show
    let roverPic

    let curiosityCams = <Image src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA15952_hires.jpg" />
    let curiosityRoute = <Image src="https://mars.nasa.gov/msl/imgs/2019/07/MSL_TraverseMap_Sol2480-full.jpg" />
    let spiritOpportunityCams = <Image src="https://marsmobile.jpl.nasa.gov/imgs/mer/rover/mer-instruments-labels.jpg" />
    let opportunityRoute = <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/MERB_878.jpg/700px-MERB_878.jpg" />
    let spiritRoute = <Image src="https://mars.nasa.gov/mer/mission/tm-spirit/images/MERA_Sol2518_1.jpg" />


    //if no rover chosen, use default
    if (photos.length === 0 && !rover) {
        roverPic = <Image className="ui fluid image" src="https://mars.nasa.gov/system/news_items/main_images/8414_1_MAIN_mars-rover-opportunity-tracks-Sol3754B-pia18605-CROPPED.jpg" />
    }

    //show route / camera pics on rover choice
    if (photos.length === 0) {
      if (rover === "curiosity"){
        if (show === "cameras"){
          roverPic = curiosityCams
        } else if (show === "route"){
          roverPic = curiosityRoute
        }
      } else if (rover === "opportunity"){
        if (show === "cameras"){
          roverPic = spiritOpportunityCams
        } else if (show === "route"){
          roverPic = opportunityRoute
        }
      } else if (rover === "spirit"){
        if (show === "cameras"){
          roverPic = spiritOpportunityCams
        } else if (show === "route"){
          roverPic = spiritRoute
        }
      }
    }


    return (
      <div>
        {roverPic}
      </div>
    )

  }


}
export default RoverPic
