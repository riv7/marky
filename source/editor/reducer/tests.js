import { Map,List } from 'immutable';

export const selectedTest = (test=-1, action) => {
  switch(action.type) {
    case 'TEST_SELECTED':
      return action.payload;

    default:
      return test;
  }
}

export const tests = (tests=List([]), action) => {
  switch(action.type) {
    case 'TEST_ADDED': {
      const {id, testFormData, existingId} = action.payload;

      const allMarks = List(Object.entries(testFormData.marks))
      .map(([key, value]) => {
        const studentId = key.split("-")[1];
        return Map({student: parseFloat(studentId), mark: parseFloat(value)});
      });

      const test = Map({
        id: existingId === -1 ? id : existingId,
        name: testFormData.addTestName,
        written: testFormData.addTestWrittenAt,
        marks: allMarks,
        category: parseFloat(testFormData.addTestSelect),
        subject: testFormData.addTestSubject
      });

      const index = existingId === -1 ?
        -1 : tests.findIndex(t => t.get('id') === existingId);

      return (index === -1) ? tests.push(test) : tests.set(index, test);
    }

    case 'TEST_REMOVED': {
      const testId = action.payload;
      const index = tests.findIndex(t => t.get('id') === testId);
      return tests.delete(index);
    }

    default:
      return tests;
  }
}
