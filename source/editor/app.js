var React = require('react');
var ReactDOM = require('react-dom');

require('../../build/editor/css/marky.css');

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory'

import reducer from './reducer/reducer';
import { List, Map } from 'immutable';
import MarkyEditor from './components/markyeditor';

import { createStudentsViewModel } from './uiservice/converter';

const grades = List([
  Map({id: 0, name: 'Klasse 7a'}),
  Map({id: 1, name: 'Klasse 8b'}),
  Map({id: 2, name: 'Klasse 10a'}),
  Map({id: 3, name: 'Klasse 10c'})
]);

const subjects = List([
  Map({id: 0, name: 'Mathe', scope: '7a'}),
  Map({id: 1, name: 'Physik', scope: '8b'}),
  Map({id: 2, name: 'Religion', scope: '10'})
]);

const students = List([
  Map({ id: 0, name: 'Nico Rosberg', grade: 0}),
  Map({ id: 1, name: 'Lewis Hamilton', grade: 0}),
  Map({ id: 2, name: 'Sebastian Vettel', grade: 0}),
  Map({ id: 3, name: 'Kimi Räikkönen', grade: 0}),
  Map({ id: 4, name: 'Dani Ricciardo', grade: 0}),
  Map({ id: 5, name: 'Max Verstappen', grade: 0}),
  Map({ id: 6, name: 'Nico Hülkenberg', grade: 0}),
  Map({ id: 7, name: 'Sergio Perez', grade: 0}),
  Map({ id: 8, name: 'Fernando Alonso', grade: 0}),
  Map({ id: 9, name: 'Stoffel van Doorn', grade: 0}),
  Map({ id: 10, name: 'Valtteri Bottas', grade: 1}),
  Map({ id: 11, name: 'Felipe Massa', grade: 1}),
  Map({ id: 12, name: 'Pascal Wehrlein', grade: 1}),
  Map({ id: 13, name: 'Esteban Ocon', grade: 1}),
  Map({ id: 14, name: 'Romain Grosjean', grade: 2}),
  Map({ id: 15, name: 'Esteban Gutierez', grade: 3})
]);

const subjects2students = List([
  Map({subjectId: 0, studentId: 0}),
  Map({subjectId: 0, studentId: 1}),
  Map({subjectId: 0, studentId: 2}),
  Map({subjectId: 0, studentId: 3}),
  Map({subjectId: 0, studentId: 4}),
  Map({subjectId: 0, studentId: 5}),
  Map({subjectId: 0, studentId: 6}),
  Map({subjectId: 0, studentId: 7}),
  Map({subjectId: 0, studentId: 8}),
  Map({subjectId: 0, studentId: 9}),
  Map({subjectId: 1, studentId: 10}),
  Map({subjectId: 1, studentId: 11}),
  Map({subjectId: 1, studentId: 12}),
  Map({subjectId: 1, studentId: 13}),
  Map({subjectId: 2, studentId: 14}),
  Map({subjectId: 2, studentId: 15})
]);

const tests = List([
  Map({
     id: 2,
     name: 'Mündlich',
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
     category: 2,
     subject: 0
   }),
  Map({
     id: 1,
     name: 'KA2',
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
     category: 0,
     subject: 0
   }),
   Map({
      id: 0,
      name: 'KA1',
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
      category: 0,
      subject: 0
    }),
    Map({
       id: 3,
       name: 'KA3',
       written: '2017-07-07',
       marks: List([
         Map({student: 0, mark: 2.5}),
         Map({student: 1, mark: 2.5}),
         Map({student: 2, mark: 4.5}),
         Map({student: 3, mark: 5.5}),
         Map({student: 4, mark: 3.5}),
         Map({student: 5, mark: 4.0}),
         Map({student: 6, mark: 4.5}),
         Map({student: 7, mark: 2.0}),
         Map({student: 8, mark: 1.5}),
         Map({student: 9, mark: 2.0}),
       ]),
       category: 0,
       subject: 0
     }),
     Map({
        id: 4,
        name: 'Mündl',
        written: '2017-05-05',
        marks: List([
          Map({student: 10, mark: 1.5}),
          Map({student: 11, mark: 2.5}),
          Map({student: 12, mark: 3.5}),
          Map({student: 13, mark: 4.5})
        ]),
        category: 2,
        subject: 1
      }),
      Map({
         id: 5,
         name: 'KA1',
         written: '2017-07-05',
         marks: List([
           Map({student: 10, mark: 5.5}),
           Map({student: 11, mark: 3.5}),
           Map({student: 12, mark: 3.5}),
           Map({student: 13, mark: 4.5})
         ]),
         category: 0,
         subject: 1
       }),
     Map({
        id: 6,
        name: 'Mündl',
        written: '2017-05-05',
        marks: List([
          Map({student: 14, mark: 3.5}),
          Map({student: 15, mark: 4.5})
        ]),
        category: 1,
        subject: 2
      })
]);

const categories = List([
  Map({id: 0, name: 'schriftlich', color: "danger", sortingrank: "A", faktor: 6}),
  Map({id: 1, name: 'test', color: "warning", sortingrank: "A", faktor: 6}),
  Map({id: 2, name: 'mündlich', color: "info", sortingrank: "B", faktor: 7})
]);

//sort
const store = createStore(reducer, {
  grades: grades,
  subjects: subjects,
  students: students,
  subjects2students: subjects2students,
  tests: tests,
  categories: categories
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      <MarkyEditor />
    </Router>
  </Provider>,
  document.getElementById('react-application')
);
