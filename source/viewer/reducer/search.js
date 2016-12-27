const search = (filterText="", action) => {
  switch(action.type) {
    case 'FILTER_STUDENTS':
      return action.payload;

    default:
      return filterText;
  }
}

export default search;
