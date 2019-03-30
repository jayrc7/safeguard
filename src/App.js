import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import LoginPage from './components/LoginPage';
import SignUp from './components/signup/signup';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact render={(props) => <Home {...props}/>}/> */}
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signup/" component={SignUp}/>
            import SignUp from './signup/signup';
            {/* NOT FOUND PAGE */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
