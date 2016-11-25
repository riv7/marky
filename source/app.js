var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/app.css');

import {FilterableStudentsTable} from './components/components';

const gradesAndStudents20162017 = [
  {
    id: 0,
    grade: '7d',
    students: [
      {id: 0, name:'Max Maier'},
      {id: 1, name:'Walter Vogel'},
      {id: 2, name:'Slash Roses'}
    ]
  },
  {
    id: 1,
    grade: '8a',
    students: [
      {id: 3, name:'Timo Baumgartl'},
      {id: 4, name:'Alexandru Maxim'},
      {id: 5, name:'Christian Gentner'}
    ]
  },
  {
    id: 2,
    grade: '9c',
    students: [
      {id: 6, name:'Kimi Räikkönen'},
      {id: 7, name:'Sebastian Vettel'},
      {id: 8, name:'Max Verstappen'}
    ]
  },
];

const availableYears = [
  {id: 0, name:'2016/2017'},
  {id: 1, name:'2015/2016'},
  {id: 2, name:'2014/2015'}
];

const gradesStudentsAndYears = [
    gradesAndStudents20162017,
    availableYears
];

ReactDOM.render(
  <FilterableStudentsTable gradesStudentsAndYears={gradesStudentsAndYears} />,
  document.getElementById('react-application')
);
