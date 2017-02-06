// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export const gradeAdded = (gradeName) => {
  return {
    type: 'GRADE_ADDED',
    payload: {
      id:  uid(),
      name: gradeName
    }
  };
}

export const subjectSelected = (subjectId) => {
  return {
    type: 'SUBJECT_SELECTED',
    payload: subjectId
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

export const addedStudentToSubject = (studentId, subjectId) => {
  return {
    type: 'ADDED_STUDENT_TO_SUBJECT',
    payload: {
      studentId: studentId,
      subjectId: subjectId
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
