import React from 'react';
import { Form } from 'semantic-ui-react';
import cookie from 'react-cookies'

import firebase from '../../firebase';



class SignIn extends React.Component {
  constructor() {
      super();

      this.state = {
        name: '',
        pass: ''
      }

  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handlePassChange = e => {
    this.setState({
      pass: e.target.value
    })
  }

  login = () => {
    console.log(this.state.name, this.state.pass);
    
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Field label="Name" 
                        control="input" 
                        value={this.state.name}
                        onChange={this.handleNameChange} />
            <Form.Field label="Password" 
                        control="input" 
                        type="password"
                        value={this.state.pass}
                        onChange={this.handlePassChange}/>
          </Form.Group>
          <Form.Button onClick={this.login}>Login</Form.Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
