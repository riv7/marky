import { combineReducers } from 'redux';
import { selectedSubject, subjects} from './subject';
import { selectedGrade, grades} from './grade';
import { students } from './students';
import { tests } from './tests';
import { categories } from './category';

const reducer = combineReducers({
  selectedGrade,
  grades,
  selectedSubject,
  subjects,
  students,
  tests,
  categories
});

export default reducer
