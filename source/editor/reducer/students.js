import { Map,List,fromJS } from 'immutable';

export const students = (students=List([]), action) => {
  switch(action.type) {
    case 'FETCH_YEAR': {
        const fetchedData = fromJS(action.payload);
        const students = fetchedData.get('students');
        return students;
    }
    case 'STUDENT_ADDED':
      return students.push(Map(action.payload));

    default:
      return students;
  }
}
