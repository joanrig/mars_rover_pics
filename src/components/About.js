import React, { PureComponent } from 'react';
import { Container, Segment, Image } from 'semantic-ui-react'


class About extends PureComponent {

  state = {
    width: window.innerWidth
  }

  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange)
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange)
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth })
   }

  render(){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    let textStyle

    isMobile? textStyle = "about-text-mobile" : textStyle = "about-text-fullscreen"


    return (

      <Container>
        <Segment>
          <h2 className="ui block header center">
            About
          </h2>
          <br/>
          <div>
            <Image className="center" src="https://preview.redd.it/axr1p30xcgb01.jpg?width=960&crop=smart&auto=webp&s=1d3d241cf8f12c9acedbecafbfdcd649f47313fe" />
            <figcaption className="center" >clockwise, from front left: Sojourner was about the size of a microwave. Spirit and Opportunity are twins; Curiosity is about the size of an SUV. </figcaption>
          </div>
          <br/>
          <div className={textStyle}>
            <br/>
            <p>
              In 1971 and 1972, the Soviet Union landed two rover on Mars. The first one crash-landed and broke. The second one achieved earth's first successful landing on the red planet. It was mounted on skis and tethered by a cable to its lander.
            </p>
            <p>
              Unfortunately, it landed during a major dust storm. It began sending pictures back only 90 seconds after landing, but its transmissions stopped after just 14 seconds. While the Soviet Mars 2 and 3 orbiters managed to take the first detailed photos of the Mars terrain, the only photo that first rover sent back was described as being grey with no details.
            </p>

            <p>
              We've come a long way since then!
            </p>

            <p>
              The U.S. National Aeronautic and Space Administration, NASA, has landed four rovers on the red planet since then:
              <br/>
              <br/>
              1. Sojourner (landeded July 4, 1997)
              <br/>
              2. Spirit (Jan. 2004)
              <br/>
              3. Opportunity (Jan. 24, 2004)
              <br/>
              4. Curiosity (Aug. 6, 2012).
            </p>

            <p>
              NASA hosts an API with more than 360,000 photos (it is maintained by Boston programmer Chris Cerami). What a treasure trove!
            </p>

            <p>
              I designed this site to make it easy for anyone, especially curious kids, to search for photos by rover, date (earth date or 'sol', a martian day) and camera (each rover is equipped with several cameras.)
            </p>

            <br/>
            <h2>How to use this app</h2>
            <p>
              When you pick the Rover whose photos you want to see, a map for that rover will appear. On it, you can trace the Rover's route by sol. Then you can enter that sol to see photos from that location. When you pick a camera, a diagram of that rover's cameras appears, so you can pick one based on the view you want. Not every camera took pictures on every day; if you don't see results, try changing your camera selection to 'All Cameras.'
            </p>
            <p>
              On the Rovers page you can find basic information about the Rovers, plus videos that I picked because they are clear, compelling and short.
            </p>
            <br/>

            <h2>Under the Hood</h2>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="react-logo"/>
            <p>
              This app is built with a with React. It is written in JavaScript ES6.  I developed this app for fun, the week after I graduated from <a href="https://flatironschool.com/">Flatiron School's</a> structured engineering immersion course.
            </p>

            <p>
               This is a Single Page Application, which means that its one page is dyamically re-rendered to show different information as you click on buttons. But it <em> seems </em> to have more than one page because it uses React routing to change the address in the address bar as you shift between the nav buttons.
            </p>
            <p>
               I love working with React-Redux, but decided to try a different way of managing state in this project. I'm using event emitters. I also had fun playing with Semantic React UI's <em>Transition</em> feature to make a 'no photos found' error message gradually appear if loading takes too long.
               Here is <a href="https://github.com/joanrig/mars_rover_pics">the repo for the project </a>.
            </p>
            <br/>

            <h2>Thanks to ...</h2>
            <Image src="https://image.flaticon.com/icons/svg/944/944255.svg" className="favicon-credit"/>
            <p>
              I couldn't have made this app without the data from NASA, which hosts several APIs to serve up data based on the hard work of its scientists and engineers. This app is based on the <a href="https://api.nasa.gov/api.html#MarsPhotos">Mars Rover Photos API</a>. Note: it is maintained for NASA by programmer <a href="https://github.com/chrisccerami/mars-photo-api">Chris Cerami.</a> Thank you, Chris! And now for the Favicon! (the little picture that appears next to my app name on the tab of your web browser.) It was made by Icon made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">Flaticon</a>. Good work, folks!
            </p>
            <br/>

            <h1>Hire me!</h1>
            <p>
              About me: My name is Joan Indiana Lyness. I'm a <a href="http://joanrigdon.com/">former journalist</a> who caught the coding bug and a big fan of space missions. I'm married to a NASA engineer who has worked on several space missions including Curiosity, LADEE, Maven. Now he's working on the European Mars Rover and a new mission, Dragonfly, which aims to send a quadcopter! to explore Saturn's moon, Titan. (Can't wait to see those photos!)
            </p>

            <p>
              <b>Now I'm looking for my first job as a web developer. Yes, that's right, you can hire me. Here's my <a href="https://tinyurl.com/joan-lyness-portfolio">online profile</a> </b>which includes links to demos of my other apps, my LinkedIn profile, resume and contact info. I live near Washington, D.C. Go Nats!
            </p>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Segment>
      </Container>

    )

  }

}

export default About;
