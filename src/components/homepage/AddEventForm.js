import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class AddEventForm extends React.Component {
  constructor() {
    super();

    this.state = {
      event: '',
      subject: '',
      time: 0,
      community: ''
    }
  }

  render() {
    return (
      <Form>
        <label>Add Event</label>
        <Form.Field>
          <label>Subject</label>
          <input/>
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input/>
        </Form.Field>
        <Form.TextArea label='Description'/>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default AddEventForm