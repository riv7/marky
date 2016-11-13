var React = require('react');
var ReactDOM = require('react-dom');

import {FilterableStudentsTable} from './components/components';

const students20162017 = [
  {grade: '2014/2015'},
  {grade: '2015/2016'},
  {grade: '2016/2017'},
];

ReactDOM.render(
  <FilterableStudentsTable studentsOfYear={students20162017} />,
  document.getElementById('react-application')
);
