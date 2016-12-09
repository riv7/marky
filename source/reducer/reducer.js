var initialFilterText = "";

export default function(filterText=initialFilterText, action) {
  switch(action.type) {
    case 'FILTER_STUDENTS':
      return action.payload;

    default:
      return filterText;
  }
}
