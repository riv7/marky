import { Map,List } from 'immutable';

export const selectedSubject = (subject='Mathe', action) => {
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
