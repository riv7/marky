var React = require('react');
var ReactDOM = require('react-dom');

require('../../build/viewer/css/marky.css');

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import FilterableStudentsTable from './components/filterabletable';
import { getLatestYear } from './uiservice/year';
import { List, Map } from 'immutable';

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

const gradesStudentsAndYearsImmutable = List([
  Map({
    id:0,
    year:'2016/2017',
    gradesAndStudents: List([
      Map({
        id: 0,
        grade: '7d',
        students: List([
          Map({id: 0, name:'Max Maier'}),
          Map({id: 1, name:'Walter Vogel'}),
          Map({id: 2, name:'Slash Roses'})
        ])
      }),
      Map({
        id: 1,
        grade: '8a',
        students: List([
          Map({id: 3, name:'Timo Baumgartl'}),
          Map({id: 4, name:'Alexandru Maxim'}),
          Map({id: 5, name:'Christian Gentner'})
        ])
      }),
      Map({
        id: 2,
        grade: '9c',
        students: List([
          Map({id: 6, name:'Kimi Räikkönen'}),
          Map({id: 7, name:'Sebastian Vettel'}),
          Map({id: 8, name:'Max Verstappen'})
        ])
      })
    ])
  }),
  Map({
    id:1,
    year:'2015/2016',
    gradesAndStudents: List([
      Map({
        id: 3,
        grade: '10d',
        students: List([
          Map({id: 9, name:'Frank Ribery'}),
          Map({id: 10, name:'Manuel Neuer'}),
          Map({id: 11, name:'Sepp Maier'})
        ])
      }),
      Map({
        id: 4,
        grade: '5a',
        students: List([
          Map({id: 12, name:'Gerhard Schröder'}),
          Map({id: 13, name:'Angela Merkel'}),
          Map({id: 14, name:'Horst Seehofer'})
        ])
      }),
      Map({
        id: 5,
        grade: '6c',
        students: List([
          Map({id: 15, name:'Rivers Cuomo'}),
          Map({id: 16, name:'Brian Bell'}),
          Map({id: 17, name:'Patrick Wilson'})
        ])
      })
    ])
  }),
  Map({
    id:2,
    year:'2014/2015',
    gradesAndStudents: List([
      Map({
        id: 4,
        grade: '10d',
        students: List([
          Map({id: 18, name:'Der Weihnachtsmann'}),
          Map({id: 19, name:'Herr Osterhase'}),
          Map({id: 20, name:'Frau Holle'})
        ])
      }),
      Map({
        id: 5,
        grade: '5a',
        students: List([
          Map({id: 21, name:'Lucky Luke'}),
          Map({id: 22, name:'Asterix Gallier'}),
          Map({id: 23, name:'Julius Caesar'})
        ])
      }),
      Map({
        id: 6,
        grade: '6c',
        students: List([
          Map({id: 24, name:'Will Smith'}),
          Map({id: 25, name:'Brian Cranston'}),
          Map({id: 26, name:'Arnold Schwarzenegger'})
        ])
      })
    ])
  })
]);

const latestYear = getLatestYear(gradesStudentsAndYearsImmutable)
const store = createStore(reducer, {year: latestYear});

ReactDOM.render(
  <Provider store={store}>
    <FilterableStudentsTable gradesStudentsAndYears={gradesStudentsAndYearsImmutable}/>
  </Provider>,
  document.getElementById('react-application')
);
