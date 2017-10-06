var React = require('react');
var ReactDOM = require('react-dom');

require('../../build/editor/css/marky.css');

import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';

import createBrowserHistory from 'history/createBrowserHistory';

import reducer from './reducer/reducer';
import { List, Map } from 'immutable';
import MarkyEditor from './components/markyeditor';


const grades = List([
  Map({id: 1, name: 'Klasse 7a'}),
  Map({id: 2, name: 'Klasse 8b'}),
  Map({id: 3, name: 'Klasse 10a'}),
  Map({id: 4, name: 'Klasse 10c'})
]);

const subjects = List([
  Map({id: 1, name: 'Mathe', scope: '7a'}),
  Map({id: 2, name: 'Physik', scope: '8b'}),
  Map({id: 3, name: 'Religion', scope: '10'})
]);

const students = List([
  Map({ id: 1, name: 'Nico Rosberg', gradeId: 1}),
  Map({ id: 2, name: 'Lewis Hamilton', gradeId: 1}),
  Map({ id: 3, name: 'Sebastian Vettel', gradeId: 1}),
  Map({ id: 4, name: 'Kimi Räikkönen', gradeId: 1}),
  Map({ id: 5, name: 'Dani Ricciardo', gradeId: 1}),
  Map({ id: 6, name: 'Max Verstappen', gradeId: 1}),
  Map({ id: 7, name: 'Nico Hülkenberg', gradeId: 1}),
  Map({ id: 8, name: 'Joylon Palmer', gradeId: 1}),
  Map({ id: 9, name: 'Sergio Perez', gradeId: 1}),
  Map({ id: 10, name: 'Esteban Ocon', gradeId: 1}),
  Map({ id: 11, name: 'Fernando Alonso', gradeId: 1}),
  Map({ id: 12, name: 'Stoffel van Doorn', gradeId: 1}),
  Map({ id: 13, name: 'Felipe Massa', gradeId: 2}),
  Map({ id: 14, name: 'Lance Stroll', gradeId: 2}),
  Map({ id: 15, name: 'Pascal Wehrlein', gradeId: 2}),
  Map({ id: 16, name: 'Marcus Ericsson', gradeId: 2}),
  Map({ id: 16, name: 'Romain Grosjean', gradeId: 3}),
  Map({ id: 16, name: 'Carlos Sainz Jr.', gradeId: 4})
]);

const subjects2students = List([
  Map({subjectId: 1, studentId: 1}),
  Map({subjectId: 1, studentId: 2}),
  Map({subjectId: 1, studentId: 3}),
  Map({subjectId: 1, studentId: 4}),
  Map({subjectId: 1, studentId: 5}),
  Map({subjectId: 1, studentId: 6}),
  Map({subjectId: 1, studentId: 7}),
  Map({subjectId: 1, studentId: 8}),
  Map({subjectId: 1, studentId: 9}),
  Map({subjectId: 1, studentId: 10}),
  Map({subjectId: 1, studentId: 11}),
  Map({subjectId: 1, studentId: 12}),
  Map({subjectId: 2, studentId: 13}),
  Map({subjectId: 2, studentId: 14}),
  Map({subjectId: 2, studentId: 15}),
  Map({subjectId: 2, studentId: 16}),
  Map({subjectId: 3, studentId: 17}),
  Map({subjectId: 3, studentId: 18})
]);

const tests = List([
  Map({
     id: 3,
     name: 'Mündlich',
     written: '2017-01-01',
     marks: List([
       Map({studentId: 1, mark: 3.0}),
       Map({studentId: 2, mark: 1.5}),
       Map({studentId: 3, mark: 1.5}),
       Map({studentId: 4, mark: 5.5}),
       Map({studentId: 5, mark: 1.5}),
       Map({studentId: 6, mark: 1.5}),
       Map({studentId: 7, mark: 3.0}),
       Map({studentId: 8, mark: 1.5}),
       Map({studentId: 9, mark: 1.5}),
       Map({studentId: 10, mark: 1.5}),
       Map({studentId: 11, mark: 1.5}),
       Map({studentId: 12, mark: 1.5})
     ]),
     category: 3,
     subject: 1
   }),
  Map({
     id: 2,
     name: 'KA2',
     written: '2016-08-01',
     marks: List([
       Map({studentId: 1, mark: 1.5}),
       Map({studentId: 2, mark: 2.5}),
       Map({studentId: 3, mark: 1.5}),
       Map({studentId: 4, mark: 4.5}),
       Map({studentId: 5, mark: 1.5}),
       Map({studentId: 6, mark: 1.5}),
       Map({studentId: 7, mark: 4.5}),
       Map({studentId: 8, mark: 1.0}),
       Map({studentId: 9, mark: 1.5}),
       Map({studentId: 10, mark: 2.0}),
       Map({studentId: 11, mark: 2.0}),
       Map({studentId: 12, mark: 2.0})
     ]),
     category: 1,
     subject: 1
   }),
   Map({
      id: 1,
      name: 'KA1',
      written: '2016-01-01',
      marks: List([
        Map({studentId: 1, mark: 4.0}),
        Map({studentId: 2, mark: 2.5}),
        Map({studentId: 3, mark: 1.5}),
        Map({studentId: 4, mark: 4.5}),
        Map({studentId: 5, mark: 1.5}),
        Map({studentId: 6, mark: 5.5}),
        Map({studentId: 7, mark: 4.5}),
        Map({studentId: 8, mark: 1.0}),
        Map({studentId: 9, mark: 1.5}),
        Map({studentId: 10, mark: 2.0}),
        Map({studentId: 11, mark: 2.0}),
        Map({studentId: 12, mark: 2.0})
      ]),
      category: 1,
      subject: 1
    }),
    Map({
       id: 4,
       name: 'KA3',
       written: '2017-07-07',
       marks: List([
         Map({studentId: 1, mark: 2.5}),
         Map({studentId: 2, mark: 2.5}),
         Map({studentId: 3, mark: 4.5}),
         Map({studentId: 4, mark: 5.5}),
         Map({studentId: 5, mark: 3.5}),
         Map({studentId: 6, mark: 4.0}),
         Map({studentId: 7, mark: 4.5}),
         Map({studentId: 8, mark: 2.0}),
         Map({studentId: 9, mark: 1.5}),
         Map({studentId: 10, mark: 2.0}),
         Map({studentId: 11, mark: 2.0}),
         Map({studentId: 12, mark: 2.0})
       ]),
       category: 1,
       subject: 1
     }),
     Map({
        id: 5,
        name: 'Mündl',
        written: '2017-05-05',
        marks: List([
          Map({studentId: 13, mark: 1.5}),
          Map({studentId: 14, mark: 2.5}),
          Map({studentId: 15, mark: 3.5}),
          Map({studentId: 16, mark: 4.5})
        ]),
        category: 3,
        subject: 2
      }),
      Map({
         id: 6,
         name: 'KA1',
         written: '2017-07-05',
         marks: List([
           Map({studentId: 13, mark: 5.5}),
           Map({studentId: 14, mark: 3.5}),
           Map({studentId: 15, mark: 3.5}),
           Map({studentId: 16, mark: 4.5})
         ]),
         category: 1,
         subject: 2
       }),
     Map({
        id: 7,
        name: 'Mündl',
        written: '2017-05-05',
        marks: List([
          Map({studentId: 17, mark: 3.5}),
          Map({studentId: 18, mark: 4.5})
        ]),
        category: 2,
        subject: 3
      })
]);

const categories = List([
  Map({id: 1, name: 'schriftlich', color: "danger", sortingrank: "A", faktor: 6}),
  Map({id: 2, name: 'test', color: "warning", sortingrank: "A", faktor: 6}),
  Map({id: 3, name: 'mündlich', color: "info", sortingrank: "B", faktor: 7})
]);

//store
const store = createStore(reducer, {}, applyMiddleware(thunk));

// store which is filled with local mocks initially
// const store = createStore(reducer, {
//   grades: grades,
//   subjects: subjects,
//   students: students,
//   subjects2students: subjects2students,
//   tests: tests,
//   categories: categories
// }, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      <MarkyEditor />
    </Router>
  </Provider>,
  document.getElementById('react-application')
);
