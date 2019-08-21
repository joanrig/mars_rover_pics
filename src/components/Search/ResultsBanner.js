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
          seeing double? many of the images are stereographic, taken at the same time by two cameras that are slightly offset.
          <br/>
          <a href="https://www.instructables.com/id/How-to-view-stereo-graphic-images/">How to view them</a>
        </em>
        </p>
      </>
    )
  }






}
export default ResultsBanner
