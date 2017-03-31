var React = require('react');
var ReactDOM = require('react-dom');

import MainTable from './maintable';
import AddTestContainer from '../containers/addtest';

import { Route } from 'react-router';

const MarkyEditor = () => (
  <div>
    <Route exact path="/" component={MainTable} />
    <Route path="/addtest" component={AddTestContainer} />
  </div>
)

export default MarkyEditor;
