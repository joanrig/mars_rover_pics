import React, { Component} from 'react'
import { Card, Image } from 'semantic-ui-react'




class PhotoCard extends Component {

  render(){
    let notFound = ""
    if (!this.props){
      notFound = "No photos found. Please try again."
    }

    let image_url = this.props["img_src"]

    return (
    <>
      {notFound}
      <Card className="photoCard">
          <Image src={image_url} wrapped ui={false}  /> />
        <Card.Content >
          <Card.Header >
            <h1>{this.props["rover"]["name"]}</h1>
            <h3>{this.props["camera"]["full_name"]}</h3>
          </Card.Header>
        </Card.Content>

        <Card.Content extra >
          <h3>Sol {this.props["sol"]}</h3>
          <h5>Earth Date {this.props["earth_date"]}</h5>
          <a href={image_url}>closer look</a>
        </Card.Content>
      </Card>
    </>
    )
  }

}

export default PhotoCard
