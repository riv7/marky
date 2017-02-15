import { List, Map } from 'immutable';

export const createStudentsViewModel = (students, tests, categories) => {

  //sort by category (sortingrank) and written date
  const sortedByDate = groupByCategoryAndSorted(tests, categories);
  const testsSorted = sortedByDate.toList().flatten(true);

  //get view model data to display
  const headers = testsSorted.map(test => Map({
    testId: test.get('id'),
    testName: test.get('name')
  }));
  const cats = testsSorted.map(test => Map({
    testId: test.get('id'),
    category: test.get('category')
  }));
  const studentsTableData = getStudentsTableData(students, testsSorted, sortedByDate);
  const avgOfTests = getAveragesOfTests(testsSorted);

  return Map({
    'headers': headers,
    'cats': cats,
    'studentsTableData': studentsTableData,
    'avgOfTests': avgOfTests
  });
}

const groupByCategoryAndSorted = (tests, categories) => {
  //sort by category (sortingrank) and date
  const testsWithCategories = tests.map(test => {
    const matchingCategory = categories.filter(
      category => category.get('id') === test.get('category')).first();
    return test.set('category', matchingCategory);
  });

  const sortedByRank = testsWithCategories.sort((a,b) =>
    a.get('category').get('sortingrank').localeCompare(b.get('category').get('sortingrank'))
  );

  const groupedByCategory = sortedByRank.groupBy(x => x.get('category').get('id'));
  return groupedByCategory.map(group => {
    return group.sort((a, b) => a.get('written').localeCompare(b.get('written')));
  });
}

const getAveragesOfTests = (testsSorted) => {
  return testsSorted.map(test => {
    const sumTest = test.get('marks')
      .map(ma => ma.get('mark'))
      .reduce((prev,current) => prev+current);
    return Map({
      testId: test.get('id'),
      testAvg: round2(sumTest / test.get('marks').size)
    })
  });
}

const getStudentsTableData = (students, testsSorted, sortedByDate) => {

  //get temp data to calculate averages of students
  const faktorSizeTuple = sortedByDate.toList().map(x => {
     return ({'faktor': x.first().get('category').get('faktor'), 'size': x.size})
   });
  const sumFaktor = faktorSizeTuple
    .map(tuple => tuple.faktor)
    .reduce((prev,current) => prev+current);

  const studentsTableData = students.map(student => {
    const studentName = student.get('name');
    const marksOfStudent = testsSorted.map(test =>
      test
        .get('marks')
        .filter(mark => mark.get('student') === student.get('id'))
        .first()
      );
    let sliceValue = 0;
    const avgOfStudentList = faktorSizeTuple.map(avgTuple => {
      const slicedList = marksOfStudent.slice(sliceValue, sliceValue+avgTuple.size);
      const partSum = slicedList.map(mar => mar.get('mark')).reduce((prev,current) => prev+current);
      const partRes = (partSum/avgTuple.size)*avgTuple.faktor;
      sliceValue = sliceValue+avgTuple.size;
      return partRes;
    });
    const avgStudent = round2((avgOfStudentList.reduce((prev,current) => prev+current))/sumFaktor);

    return Map({
      'studentId': student.get('id'),
      'studentName': studentName,
      'marks': marksOfStudent,
      'avg': avgStudent
    });
  });

  return studentsTableData;
}

const round2 = (doublevalue) => {
  return Math.round(doublevalue * 100) / 100
}
