import { Map,List } from 'immutable';

export const categories = (categories=List([]), action) => {
  switch(action.type) {
    case 'CATEGORY_ADDED':
      return categories.push(Map(action.payload));

    default:
      return categories;
  }
}
