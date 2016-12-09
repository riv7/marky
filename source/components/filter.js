export const filterGrades = (studentsAndGrades, filterText) => {
  const filterArray = filterText.split(" ");
  const filterGradesArray = filterArray.filter(containsDigit);

  const containsFilter = (stringToCheck) => {
    var containsRes = filterGradesArray.filter(filterValue =>
      filterValue === stringToCheck
    );
    return containsRes.length > 0;
  }

  const filteredGrades = studentsAndGrades.filter(gradeData =>
    !filterGradesArray
    || filterGradesArray.length === 0
    || containsFilter(gradeData.grade)
  );
  if (filterGrades.length === 0) {
    return studentsAndGrades;
  }
  return filteredGrades;
}

export const filterStudents = (studentsAndGrades, filterText) => {
  const filterArray = filterText.split(" ");
  const filterStudentsArray = filterArray.filter(x => !containsDigit(x));

  const containsFilter = (stringToCheck) => {
    const containsRes = filterStudentsArray.filter(filterValue =>
      stringToCheck.includes(filterValue)
    );
    return containsRes.length === filterStudentsArray.length;
  }

  const filterInternal = (students) => {
    const result = students.filter(student =>
      !filterStudentsArray
      || filterStudentsArray.length === 0
      || containsFilter(student.name)
    );
    return result;
  }

  const studentsAndGradesFiltered = studentsAndGrades.map(gradeData => {
    const filteredStuds = filterInternal(gradeData.students);
    const newInstance = {
      id: gradeData.id,
      grade: gradeData.grade,
      students: filteredStuds
    };
    return newInstance;
  });
  return studentsAndGradesFiltered;
}

//helper
const containsDigit = (text) => {
  var regex = /\d/;
  return text.match(regex) !== null;
}
