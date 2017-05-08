import { Map,List } from 'immutable';

export const tests = (tests=List([]), action) => {
  switch(action.type) {
    case 'TEST_ADDED': {
      const testFormData = action.payload;

      const test = Map({
        id: testFormData.id,
        name: testFormData.get('testname'),
        written: testFormData.get('writtenat'),
        marks: testFormData.get('marks'),
        category: testFormData.get('category'),
        subject: testFormData.get('subject')
      })
    }
      return tests.push(Map(action.payload));

    default:
      return tests;
  }
}

export const testFormData = (testFormData=Map(), action) => {
  switch(action.type) {
    case 'FORMDATA_CHANGED': {

      const field = action.payload.field;
      switch(field) {
        case 'TEST_NAME' :
          return testFormData.update('testname', x=> action.payload.value);
        case 'WRITTEN_AT':
          return testFormData.set('writtenat', action.payload.value);
        case 'CATEGORY' :
          return testFormData.set('category', action.payload.value);
        case 'MARKS' : {

          {/*omg, this can be done better*/}
          const marks = testFormData.get('marks');
          const marksWithoutId = marks.filterNot(mark => mark.get('student') ===
            action.payload.id);
          const searchedMark = marks.filter(mark => mark.get('student') ===
            action.payload.id).first();
          const newMark = searchedMark.set('mark', action.payload.value);
          const newMarksList = marksWithoutId.push(newMark);
          return testFormData.set('marks', newMarksList);
        }
      }
    }

    case 'FORMDATA_INITIALIZED': {

      const initialMarks = action.payload.students.map(student => {
        return Map({student: student.get('id'), mark: ""});
      });

      return Map({
        testname: "",
        writtenat: "",
        category: "",
        marks: initialMarks
      });
    }

    default:
      return testFormData;
  }
}
