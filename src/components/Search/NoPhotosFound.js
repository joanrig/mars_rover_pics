import React, { PureComponent } from 'react'
import { Loader, Transition } from 'semantic-ui-react'


class NoPhotosFound extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.setState({ visible: true })
  }


  render() {
    const visible = this.state.visible

    return (
      <>
        <h1> loading </h1> <Loader active inline />
        <br/>
        <br/>
        <Transition visible={visible} animation='scale' duration={6500}>
        <h3>
          No photos were found.
          <br/>
          Not every camera takes pictures every day. :(
          And even rovers get a few days off.
          <br/>
          <br/>
          To improve search results:
          <br/>
          Select all cameras instead of one camera.
          <br/>
          Search by sol.
          <br/>
          (confine your search range to the sols listed on the map).
          <br/>
          <br/>
          To try again, change at least one selection and click Get Photos.
        </h3>
        </Transition>
      </>
    )
  }
}


export default NoPhotosFound
