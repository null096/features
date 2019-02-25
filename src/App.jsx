// libs
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Difference from './components/Difference/Difference';
// styles
import './index.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/difference" component={Difference} />
      </Switch>
    );
  }
}

export default App;
