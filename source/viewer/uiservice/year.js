import { Map } from 'immutable';

export const getLatestYear = (gradesStudentsAndYears) => {
  const years = gradesStudentsAndYears.map(yearData => yearData.get('year'));
  return years.sort()[years.length-1];
}

export const getYears = (gradesStudentsAndYears) => {
  return gradesStudentsAndYears.map(yearData => {
    const year = Map({
      id: yearData.get('id'),
      name: yearData.get('year')
    });
    return year;
  });
}
