import React, { Component} from 'react'
import { Card, Image } from 'semantic-ui-react'




class PhotoCard extends Component {
  constructor(props) {
    super(props)

    console.log('this.props is', this.props)
  }

  render(){
    let notFound = ""
    if (!this.props){
      notFound = "No photos found. Please try again."
    }

    return (
    <>
      {notFound}
      <Card>
        <Image src={this.props["img_src"]} wrapped ui={false}  />

        <Card.Content >
          <Card.Header >
            <h1>{this.props["rover"]["name"]}</h1>
          </Card.Header>
        </Card.Content>

        <Card.Content extra >
          <h3>Sol {this.props["sol"]}</h3>
          <h5>Earth Date {this.props["earth_date"]}</h5>
        </Card.Content>
      </Card>
    </>
    )
  }

}

export default PhotoCard
