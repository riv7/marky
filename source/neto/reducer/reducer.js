import { combineReducers } from 'redux';
import { aufgaben, aufgabenHasErrored, aufgabenIsLoading } from './aufgaben';
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  aufgaben,
  aufgabenHasErrored,
  aufgabenIsLoading,
  form: formReducer
});

export default reducer
