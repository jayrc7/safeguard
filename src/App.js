import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Home from './components/home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Route path="/" exact render={(props) => <Home {...props}/>}/>
        </div>
    );
  }
}

export default App;
