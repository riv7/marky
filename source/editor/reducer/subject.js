import { Map,List } from 'immutable';

export const selectedSubject = (subject=0, action) => {
  switch(action.type) {
    case 'SUBJECT_SELECTED':
      return action.payload;

    default:
      return subject;
  }
}

export const subjects = (subjects=List([]), action) => {
  switch(action.type) {
    case 'SUBJECT_ADDED':
      return subjects.push(Map(action.payload));

    default:
      return subjects;
  }
}

export const subjects2students = (subjects2students=List([]), action) => {
  switch(action.type) {
    case 'ADDED_STUDENT_TO_SUBJECT':
      return subjects2students.push(Map(action.payload));

    default:
      return subjects2students;
  }
}
