import { combineReducers } from 'redux';
import { aufgaben, aufgabenHasErrored, aufgabenIsLoading, aufgabenServerResponse } from './aufgaben';
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  aufgaben,
  aufgabenHasErrored,
  aufgabenIsLoading,
  aufgabenServerResponse,
  form: formReducer
});

export default reducer
