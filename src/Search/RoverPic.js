import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'
import { setDate } from './SearchActions'


class RoverPic extends Component {
  constructor(props){
    super(props)

    this.state =  {
      show:"route"
    }

  }



  render() {
    let photos = this.props.photos
    let rover = this.props.rover
    let show = this.state.show
    let roverPic

    let curiosityCams = <Image src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA15952_hires.jpg" />
    let curiosityRoute = <Image src="https://mars.nasa.gov/msl/imgs/2019/07/MSL_TraverseMap_Sol2480-full.jpg" />
    let spiritOpportunityCams = <Image src="https://marsmobile.jpl.nasa.gov/imgs/mer/rover/mer-instruments-labels.jpg" />
    let opportunityRoute = <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/MERB_878.jpg/700px-MERB_878.jpg" />
    let spiritRoute = <Image src="https://mars.nasa.gov/mer/mission/tm-spirit/images/MERA_Sol2518_1.jpg" />

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

export default connect(null, { setDate })(RoverPic)
