import React, { useState } from 'react';
import LandingGame from './LandingGame.js'
import Singlegame from './Singlegame.js'
import VersusGame from './VersusGame.js'
// import NotFoundPage from './NotFoundPage'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class App extends React.Component {
  
  render(){
    return (
      <Router>
        <Switch>            
            <Route exact path= '/' component={LandingGame}/>
            <Route exact path= '/single/:id' component={Singlegame}/>
            <Route exact path= '/versus/:id' component={VersusGame}/>         
        </Switch> 
      </Router>
    );
  }
}

