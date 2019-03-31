import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import hood from './images/ourHood.png'
import './LoginPage.css';

class LoginPage extends Component{
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }


    render(){
        return(
            <div>
              <img id='image'src={hood} size='small'/>
              <div id='head-back'>
                <h1 id='header'>SafeGuard</h1>
              </div>
              <Button id="signinBtn" href='/signin/' >
                <Link to="/signin/">Sign in</Link>
              </Button>
              <Button id="signupBtn" href='/signup/'>
                <Link to="/signup/">Sign up</Link>
              </Button>
              <div id='desc-back'>
                <h1 id='description'>Description</h1>
              </div>
            </div>
        );
    }
}

export default LoginPage;
