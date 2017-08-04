import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { selectedSubject, subjects, subjects2students} from './subject';
import { grades} from './grade';
import { students } from './students';
import { tests, testFormData } from './tests';
import { categories } from './category';



const reducer = combineReducers({
  grades,
  selectedSubject,
  subjects,
  subjects2students,
  students,
  tests,
  testFormData,
  categories,
  form: formReducer
});

export default reducer
