import React from 'react';
import { Image } from 'semantic-ui-react'



const Home = () => {

  return (
    <div className="home center" >

      <br/>
      <br/>
      <br/>
      <div className="massive">
        Mars Rover Photo Finder
      </div>
      <br/>
      <br/>
      <br/>
      <span className="home-headline">see photos from Spirit, Opportunity and Curiosity!</span>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Image className="ui fluid image" src="https://mars.nasa.gov/system/resources/detail_files/8727_PIA02406-full2.jpg"/>
    </div>
  )
}
export default Home
