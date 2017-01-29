import { Map,List } from 'immutable';

export const tests = (tests=List([]), action) => {
  switch(action.type) {
    case 'TEST_ADDED':
      return tests.push(Map(action.payload));

    default:
      return tests;
  }
}
