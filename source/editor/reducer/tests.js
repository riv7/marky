import { Map,List } from 'immutable';

export const tests = (tests=List([]), action) => {
  switch(action.type) {
    case 'TEST_ADDED': {
      const {id, testFormData} = action.payload;

      const allMarks = List(Object.entries(testFormData.marks))
      .map(([key, value]) => {
        const studentId = key.split("-")[1];
        return Map({student: parseFloat(studentId), mark: parseFloat(value)});
      });


      const test = Map({
        id: id,
        name: testFormData.addTestName,
        written: testFormData.addTestWrittenAt,
        marks: allMarks,
        category: 1,
        subject: 0
      });

      return tests.push(test);
    }

    default:
      return tests;
  }
}
