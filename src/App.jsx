// libs
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// constants
import routes from './routes';
// styles
import './index.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          routes.map(e => (
            <div key={e.path}><Link to={e.path}>{e.path}</Link></div>
          ))
        )} />
        {routes.map(e => (
          <Route key={e.path} path={e.path} component={e.Component} />
        ))}
      </Switch>
    );
  }
}

export default App;
