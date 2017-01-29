import { Map,List } from 'immutable';

export const students = (students=List([]), action) => {
  switch(action.type) {
    case 'STUDENT_ADDED':
      return students.push(Map(action.payload));

    default:
      return students;
  }
}
