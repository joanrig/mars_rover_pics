import React, { PureComponent } from 'react';



class ResultsBanner extends PureComponent {
  constructor(props){
    super(props)

    this.state = {}

  }

  render(){
    return (
      <>
        <h3>found {this.props.photos && this.props.photos.length} photos</h3>
        <p>
        <em>
          <h3>
            seeing double? many of the images are stereographic, taken at the same time by two cameras that are slightly offset.
          </h3>
          <br/>
          <a href="https://www.instructables.com/id/How-to-view-stereo-graphic-images/"><h3>How to view them</h3></a>
        </em>
        </p>
      </>
    )
  }






}
export default ResultsBanner
