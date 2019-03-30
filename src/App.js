import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';
import HomePage from './components/homepage/HomePage';
import Nav from './components/nav/Nav';

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
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact render={(props) => <Home {...props}/>}/> */}
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signup/" component={SignUp}/>
            {/* NOT FOUND PAGE */}
          </Switch>
          <Switch>
            {/* <Route path="/" exact render={(props) => <Home {...props}/>}/> */}
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signin/" component={SignIn}/>
            import SignIn from './signin/signin';
            {/* NOT FOUND PAGE */}
          </Switch>
          <Switch>
            {/* <Route path="/" exact render={(props) => <Home {...props}/>}/> */}
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/homepage/" component={HomePage}/>
            import SignIn from './homepage/HomePage';
            {/* NOT FOUND PAGE */}
          </Switch>
          <Switch>
            {/* <Route path="/" exact render={(props) => <Home {...props}/>}/> */}
            <Route exact path="/" component={Nav}/>
            <Route exact path="/community/" component={Community}/>
            import SignIn from './community/Community';
            {/* NOT FOUND PAGE */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
