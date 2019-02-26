// libs
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// constants
import routes from './routes';
// styles
import './index.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map(e => (
          <Route key={e.path} path={e.path} component={e.Component} />
        ))}
      </Switch>
    );
  }
}

export default App;
