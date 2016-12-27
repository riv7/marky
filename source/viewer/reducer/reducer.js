import { combineReducers } from 'redux';
import search from './search';
import year from './year';

const reducer = combineReducers({
  search,
  year
});

export default reducer
