import { Map,List } from 'immutable';

export const selectedGrade = (grade='7a', action) => {
  switch(action.type) {
    case 'GRADE_SELECTED':
      return action.payload;

    default:
      return grade;
  }
}

export const grades = (grades=List([]), action) => {
  switch(action.type) {
    case 'GRADE_ADDED':
      return grades.push(Map(action.payload));

    default:
      return grades;
  }
}
