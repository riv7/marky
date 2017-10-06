import { Map,List,fromJS } from 'immutable';

export const grades = (grades=List([]), action) => {
  switch(action.type) {
    case 'FETCH_YEAR': {
        const fetchedData = fromJS(action.payload);
        const grades = fetchedData.get('grades');
        return grades;
    }
    case 'GRADE_ADDED':
      return grades.push(Map(action.payload));

    default:
      return grades;
  }
}
