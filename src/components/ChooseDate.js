import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import DateInput from './DateInput'

class ChooseDate extends Component {

  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {

    return (
      <>
        <h2>Step 2. Pick a date</h2>
        <Form>
          <Form.Field>
            Search by <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field >
            <Radio
              label='earth date'
              name='radioGroup'
              value='earth_date'
              checked={this.state.value === 'earth_date'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='sol'
              name='radioGroup'
              value='sol'
              checked={this.state.value === 'sol'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        <br/>
        <DateInput dateType={this.state.value} />
      </>
    )
  }
}

export default ChooseDate
