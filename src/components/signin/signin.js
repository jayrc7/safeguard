import React from 'react';
import { Form, Image, Container } from 'semantic-ui-react';
import cookie from 'react-cookies'
import hood from '../images/ourHood.png'
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
    if ( !this.state.parent ) {
      alert("Please ask your parents to log in");
      return;
    }

    db.collection("Parents").doc((this.state.name.toLowerCase().split(' ').join(''))).get().then((doc) => {
      if ( !doc.data() || this.state.pass !== doc.data().pass ) {
        alert("Mismatching username and password");
      }
      else {
        let profile = doc.data();
        profile["currentCommunity"] = profile.communities[0];
        cookie.save('profile', profile);

        this.props.history.push(`/homepage`)
      }
    })

  }

  render() {
    return (
      <div>
        <img id='image'src={hood}/>
        <div id='head-back'>
          <h1 id='header'>SafeGuard</h1>
        </div>
        <Form id='signinForm' size='big'>
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
