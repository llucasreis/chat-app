import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Home} />
  </Router>
);

export default App;
