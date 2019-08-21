import React, { Component} from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'




class PhotoCard extends Component {

  render(){
    let notFound = ""
    if (!this.props){
      notFound = "No photos found. Please try again."
    }

    return (
    <>
      {notFound}
      <Card className="photoCard">
        <Image src={this.props["img_src"]} wrapped ui={false}  />

        <Card.Content >
          <Card.Header >
            <h1>{this.props["rover"]["name"]}</h1>
            <h3>{this.props["camera"]["full_name"]}</h3>
          </Card.Header>
        </Card.Content>

        <Card.Content extra >
          <h3>Sol {this.props["sol"]}</h3>
          <h5>Earth Date {this.props["earth_date"]}</h5>
          <a href={this.props["img_src"]}><Icon className="large magnify" /></a>
        </Card.Content>
      </Card>
    </>
    )
  }

}

export default PhotoCard
