import React from 'react';
import { Form } from 'semantic-ui-react';
import cookie from 'react-cookies'

import firebase from '../../firebase';

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

class SignIn extends React.Component {
  constructor() {
      super();

      this.state = {
        name: '',
        pass: '',
        parent: false
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

  handleToggle = e => {
    this.setState({
      parent: !this.state.parent,
    })
  }

  login = () => {
    console.log(this.state.name, this.state.pass, this.state.parent);
    db.collection("Parents").doc((this.state.name.toLowerCase()).split(' ').join('')).get().then((doc) => {
      
      console.log(doc.data());
      console.log(this.state.name.toLowerCase()).split(' ').join(''));

    })

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

          <Form.Checkbox label="Parent?"
                         onChange={this.handleToggle}>
          </Form.Checkbox>
          <Form.Button onClick={this.login}>Login</Form.Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
