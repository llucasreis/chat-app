import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Join} />
  </Router>
);

export default App;
