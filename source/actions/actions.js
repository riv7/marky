export const filterChanged = (filterText) => {
  return {
    type: 'FILTER_STUDENTS',
    payload: filterText
  };
}

export const yearChanged = (year) => {
  return {
    type: 'YEAR_CHANGED',
    payload: year
  };
}
