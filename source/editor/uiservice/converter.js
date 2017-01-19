import { List, Map } from 'immutable';

export const createStudentsViewModel = (students, tests, categories) => {

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
  const sortedByDate = groupedByCategory.map(group => {
    return group.sort((a, b) => a.get('written').localeCompare(b.get('written')));
  });
  const testsSorted = sortedByDate.toList().flatten(true);

  //get temp data to calculate averages of students
  const faktorSizeTuple = sortedByDate.toList().map(x => {
     return ({'faktor': x.first().get('category').get('faktor'), 'size': x.size})
   });
  const sumFaktor = faktorSizeTuple.reduce((prev,current) => prev.faktor+current.faktor);

  //get view model data to display
  const headers = testsSorted.map(test => test.get('name'));
  const cats = testsSorted.map(test => test.get('category'));
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
    const avgStudent = round2(avgOfStudentList.reduce((prev,current) => prev+current)/sumFaktor);

    return Map({'studentName': studentName, 'marks': marksOfStudent, 'avg': avgStudent});
  });

  return Map({'headers': headers, 'cats': cats, 'studentsTableData': studentsTableData});
}

const round2 = (doublevalue) => {
  return Math.round(doublevalue * 100) / 100
}
