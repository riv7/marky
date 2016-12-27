export const getLatestYear = (gradesStudentsAndYears) => {
  const years = gradesStudentsAndYears.map(yearData => yearData.year);
  return years.sort()[years.length-1];
}

export const getYears = (gradesStudentsAndYears) => {
  return gradesStudentsAndYears.map(yearData => {
    const year = {
      id: yearData.id,
      name: yearData.year
    };
    return year;
  });
}
