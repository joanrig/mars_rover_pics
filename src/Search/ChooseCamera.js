import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  } from 'semantic-ui-react'


class ChooseCamera extends Component {
  constructor(props){
    super(props)

    this.state = {
      camera: ""
    }
  }



  render() {

    return (
      <>

      </>
    )
  }
}


const mapStateToProps = state => ({ camera: state.camera })


export default connect(mapStateToProps)(ChooseCamera)
