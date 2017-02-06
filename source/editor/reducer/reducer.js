import { combineReducers } from 'redux';
import { selectedSubject, subjects, subjects2students} from './subject';
import { grades} from './grade';
import { students } from './students';
import { tests } from './tests';
import { categories } from './category';

const reducer = combineReducers({
  grades,
  selectedSubject,
  subjects,
  subjects2students,
  students,
  tests,
  categories
});

export default reducer
