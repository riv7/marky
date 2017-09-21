var React = require('react');
var ReactDOM = require('react-dom');

require('../../build/editor/css/marky.css');

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';

import createBrowserHistory from 'history/createBrowserHistory'

import reducer from './reducer/reducer';
import AufgabenListContainer from './containers/aufgabenlistcontainer';

//sort
const store = createStore(
  reducer,
  {
    aufgaben: []
  },
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      <AufgabenListContainer />
    </Router>
  </Provider>,
  document.getElementById('react-application')
);
