import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from '../pages/Chat';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/chat" component={Chat} />
  </Switch>
);

export default Routes;
