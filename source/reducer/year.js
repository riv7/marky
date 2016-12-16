const year = (year="2016/2017", action) => {
  switch(action.type) {
    case 'YEAR_CHANGED':
      return action.payload;

    default:
      return year;
  }
}

export default year;
