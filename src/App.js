import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './semantic/dist/semantic.min.css';

import LoginPage from './components/LoginPage';
import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';
import HomePage from './components/homepage/HomePage';
import Community from './components/community/Community';
import Patrols from './components/patrols/Patrols';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: ''
    }
  }

  render() {
    return (
      <div style={{height:'100%'}}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact render={(props) => <Home {...props}/>}/> */}
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signup/" component={SignUp}/>
            <Route exact path="/signin/" component={SignIn}/>
            <Route exact path="/homepage/" component={HomePage}/>
            <Route exact path="/community/" component={Community}/>
            <Route exact path="/patrols/" component={Patrols}/>
            {/* NOT FOUND PAGE */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
