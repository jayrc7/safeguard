import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class AddPatrolForm extends React.Component {
  render() {
    return (
      <Form>
        <label>Add Patrol</label>
        <Form.Field>
          <label>Day</label>
          <input/>
        </Form.Field>
        <Form.Field>
          <label>Time</label>
          <input/>
        </Form.Field>
        <Form.TextArea label='Route'/>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default AddPatrolForm
