var React = require('react');
var ReactDOM = require('react-dom');

import {FilterableStudentsTable} from './components/components';

const students20162017 = [
  {
    grade: '2014/2015',
    students: [
      {name:'Max Maier'},
      {name:'Walter Vogel'},
      {name:'Slash Roses'}
    ]
  },
  {
    grade: '2015/2016',
    students: [
      {name:'Timo Baumgartl'},
      {name:'Alexandru Maxim'},
      {name:'Christian Gentner'}
    ]
  },
  {
    grade: '2016/2017',
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
