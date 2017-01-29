var React = require('react');
var ReactDOM = require('react-dom');

require('../../build/editor/css/marky.css');

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';

import { List, Map } from 'immutable';
import MarkyEditor from './components/markyeditor'
import { createStudentsViewModel } from './uiservice/converter';

const subjects = List([
  Map({id: 0, name: 'Mathe'}),
  Map({id: 1, name: 'Physik'}),
  Map({id: 2, name: 'Religion'})
]);

const grades = List([
  Map({id: 0, name: 'Klasse 7a'}),
  Map({id: 1, name: 'Klasse 8b'}),
  Map({id: 2, name: 'Klasse 10c'})
]);

const students = List([
  Map({ id: 0, name: 'Nico Rosberg'}),
  Map({ id: 1, name: 'Lewis Hamilton'}),
  Map({ id: 2, name: 'Sebastian Vettel'}),
  Map({ id: 3, name: 'Kimi Räikkönen'}),
  Map({ id: 4, name: 'Dani Ricciardo'}),
  Map({ id: 5, name: 'Max Verstappen'}),
  Map({ id: 6, name: 'Nico Hülkenberg'}),
  Map({ id: 7, name: 'Sergio Perez'}),
  Map({ id: 8, name: 'Fernando Alonso'}),
  Map({ id: 9, name: 'Stoffel van Doorn'})
]);

const tests = List([
  Map({
     id: 1,
     name: 'Mündlich',
     category: 2,
     written: '2017-01-01',
     marks: List([
       Map({student: 0, mark: 3.0}),
       Map({student: 1, mark: 1.5}),
       Map({student: 2, mark: 1.5}),
       Map({student: 3, mark: 5.5}),
       Map({student: 4, mark: 1.5}),
       Map({student: 5, mark: 1.5}),
       Map({student: 6, mark: 3.0}),
       Map({student: 7, mark: 1.5}),
       Map({student: 8, mark: 1.5}),
       Map({student: 9, mark: 1.5}),
     ]),
     average: 3.5
   }),
  Map({
     id: 0,
     name: 'KA2',
     category: 0,
     written: '2016-08-01',
     marks: List([
       Map({student: 0, mark: 1.5}),
       Map({student: 1, mark: 2.5}),
       Map({student: 2, mark: 1.5}),
       Map({student: 3, mark: 4.5}),
       Map({student: 4, mark: 1.5}),
       Map({student: 5, mark: 1.5}),
       Map({student: 6, mark: 4.5}),
       Map({student: 7, mark: 1.0}),
       Map({student: 8, mark: 1.5}),
       Map({student: 9, mark: 2.0}),
     ]),
     average: 2.5
   }),
   Map({
      id: 0,
      name: 'KA1',
      category: 0,
      written: '2016-01-01',
      marks: List([
        Map({student: 0, mark: 4.0}),
        Map({student: 1, mark: 2.5}),
        Map({student: 2, mark: 1.5}),
        Map({student: 3, mark: 4.5}),
        Map({student: 4, mark: 1.5}),
        Map({student: 5, mark: 5.5}),
        Map({student: 6, mark: 4.5}),
        Map({student: 7, mark: 1.0}),
        Map({student: 8, mark: 1.5}),
        Map({student: 9, mark: 2.0}),
      ]),
      average: 2.5
    })
]);

const categories = List([
  Map({id: 0, name: 'schriftlich', color: "danger", sortingrank: "A", faktor: 6}),
  Map({id: 2, name: 'mündlich', color: "info", sortingrank: "B", faktor: 7})
]);

//sort
const store = createStore(reducer, {
  grades: grades,
  subjects: subjects,
  students: students,
  tests: tests,
  categories: categories
});

ReactDOM.render(
  <Provider store={store}>
    <MarkyEditor />
  </Provider>,
  document.getElementById('react-application')
);
