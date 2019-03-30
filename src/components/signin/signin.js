import React from 'react';
import { Form } from 'semantic-ui-react';

// Post to Firebase
const newSignIn = (data) => {

}

class SignIn extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Field label="Email" control="input" />
            <Form.Field label="Password" control="input" type="password"/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
