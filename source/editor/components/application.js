var React = require('react');
var ReactDOM = require('react-dom');

import MarkyEditor from './markyeditor';
import AddTest from './addtest';

import { Route } from 'react-router';

const App = () => (
  <div>
    <Route exact path="/" component={MarkyEditor} />
    <Route path="/addtest" component={AddTest} />
  </div>
)

export default App;
