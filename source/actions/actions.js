export function filterChanged(filterText) {
  return {
    type: 'FILTER_STUDENTS',
    payload: filterText
  };
}
