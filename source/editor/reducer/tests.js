import { Map,List } from 'immutable';

export const tests = (tests=List([]), action) => {
  switch(action.type) {
    case 'TEST_ADDED':
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
          return testFormData.update('testname', (val = action.payload.value) => val);
        case 'WRITTEN_AT' :
          return testFormData.update('writtenat', (val = action.payload.value) => val);
        case 'CATEGORY' :
          return testFormData.update('category', (val = action.payload.value) => val);
        case 'MARKS' : {

          {/*omg, this can be done better*/}
          const marks = testFormData.get('marks');
          const marksWithoutId = marks.filterNot(mark => mark.get('id') ===
            action.payload.id);
          const searchedMark = marks.filter(mark => mark.get('id') ===
            action.payload.id).first();
          const newMark = searchedMark.update('id', (val = action.payload.value) => val);
          const newMarksList = marksWithoutId.push(newMark);
          return testFormData.update('marks', (val = newMarksList) => val);
        }
      }
    }

    case 'FORMDATA_INITIALIZED': {

      const initialMarks = action.payload.students.map(student => {
        return Map({id: student.get('id'), mark: ""});
      });

      return Map({
        testname: "",
        writtenat: "",
        category: "",
        marks: initialMarks
      });
    }

    default:
      return tests;
  }
}
