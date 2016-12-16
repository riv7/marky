var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/app.css');

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import StatefullFilterableStudentsTable from './containers/filterabletable';

const gradesStudentsAndYears = [
  {
    id:0,
    year:'2016/2017',
    gradesAndStudents: [
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
      }
    ]
  },
  {
    id:1,
    year:'2015/2016',
    gradesAndStudents: [
      {
        id: 3,
        grade: '10d',
        students: [
          {id: 9, name:'Frank Ribery'},
          {id: 10, name:'Manuel Neuer'},
          {id: 11, name:'Sepp Maier'}
        ]
      },
      {
        id: 4,
        grade: '5a',
        students: [
          {id: 12, name:'Gerhard Schröder'},
          {id: 13, name:'Angela Merkel'},
          {id: 14, name:'Horst Seehofer'}
        ]
      },
      {
        id: 5,
        grade: '6c',
        students: [
          {id: 15, name:'Rivers Cuomo'},
          {id: 16, name:'Brian Bell'},
          {id: 17, name:'Patrick Wilson'}
        ]
      }
    ]
  },
  {
    id:2,
    year:'2014/2015',
    gradesAndStudents: [
      {
        id: 4,
        grade: '10d',
        students: [
          {id: 18, name:'Der Weihnachtsmann'},
          {id: 19, name:'Herr Osterhase'},
          {id: 20, name:'Frau Holle'}
        ]
      },
      {
        id: 5,
        grade: '5a',
        students: [
          {id: 21, name:'Lucky Luke'},
          {id: 22, name:'Asterix Gallier'},
          {id: 23, name:'Julius Caesar'}
        ]
      },
      {
        id: 6,
        grade: '6c',
        students: [
          {id: 24, name:'Will Smith'},
          {id: 25, name:'Brian Cranston'},
          {id: 26, name:'Arnold Schwarzenegger'}
        ]
      }
    ]
  }
];

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <StatefullFilterableStudentsTable gradesStudentsAndYears={gradesStudentsAndYears}/>
  </Provider>,
  document.getElementById('react-application')
);
