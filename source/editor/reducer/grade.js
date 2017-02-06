import { Map,List } from 'immutable';

export const grades = (grades=List([]), action) => {
  switch(action.type) {
    case 'GRADE_ADDED':
      return grades.push(Map(action.payload));

    default:
      return grades;
  }
}
