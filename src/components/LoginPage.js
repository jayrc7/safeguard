import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';



import './LoginPage.css';

class Home extends Component{
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

              <Button id="signinBtn">
                <Link to="/signin/">Sign in</Link>
              </Button>
              <Button id="signupBtn">
                <Link to="/signup/">Sign up</Link>
              </Button>

              



                {/* <h1> Hello </h1>
                <Button> Button </Button>

            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p> */}
              
            </div> 
        );
    }
}

export default Home;
