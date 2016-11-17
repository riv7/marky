var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/app.css');

import {FilterableStudentsTable} from './components/components';

const students20162017 = [
  {
    grade: '7d',
    students: [
      {name:'Max Maier'},
      {name:'Walter Vogel'},
      {name:'Slash Roses'}
    ]
  },
  {
    grade: '8a',
    students: [
      {name:'Timo Baumgartl'},
      {name:'Alexandru Maxim'},
      {name:'Christian Gentner'}
    ]
  },
  {
    grade: '9c',
    students: [
      {name:'Kimi Räikkönen'},
      {name:'Sebastian Vettel'},
      {name:'Max Verstappen'}
    ]
  },
];

ReactDOM.render(
  <FilterableStudentsTable studentsOfYear={students20162017} />,
  document.getElementById('react-application')
);
