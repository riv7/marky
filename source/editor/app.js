var React = require('react');
var ReactDOM = require('react-dom');



require('../../build/editor/css/marky.css');

import MarkyEditor from './components/markyeditor'

ReactDOM.render(
  <MarkyEditor />,
  document.getElementById('react-application')
);
