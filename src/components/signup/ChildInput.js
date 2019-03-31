import React from 'react'
import { Form } from 'semantic-ui-react';

class ChildButton extends React.Component {

  handleFirstInput = event => {
		this.setState({
			first: event.target.value
		})
	}

	handleLastInput = event => {
		this.setState({
			last: event.target.value
		})
	}

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field label="First Name" control="input" value={this.state.first} onChange={this.handleFirstInput}/>
        	<Form.Field label="Last Name" control="input" value={this.state.last} onChange={this.handleLastInput}/>
        </Form.Group>
      </Form>
    }
  );
}

export default ChildButton
