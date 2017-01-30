// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export const gradeSelected = (gradeId) => {
  return {
    type: 'GRADE_SELECTED',
    payload: gradeId
  };
}

export const gradeAdded = (gradeName) => {
  return {
    type: 'GRADE_ADDED',
    payload: {
      id:  uid(),
      name: gradeName
    }
  };
}

export const subjectSelected = (subject) => {
  return {
    type: 'SUBJECT_SELECTED',
    payload: subject
  };
}

export const subjectAdded = (subjectName) => {
  return {
    type: 'SUBJECT_ADDED',
    payload: {
      id:  uid(),
      name: subjectName
    }
  };
}

export const studentAdded = (studentName) => {
  return {
    type: 'STUDENT_ADDED',
    payload: {
      id:  uid(),
      name: studentName
    }
  };
}

{/*TODO just temporary*/}
export const testAdded = (testName) => {
  return {
    type: 'TEST_ADDED',
    payload: {
      id:  uid(),
      name: testName
    }
  };
}

{/*TODO just temporary*/}
export const categoryAdded = (categoryName) => {
  return {
    type: 'CATEGORY_ADDED',
    payload: {
      id:  uid(),
      name: categoryName
    }
  };
}
