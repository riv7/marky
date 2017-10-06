import { Map,List,fromJS } from 'immutable';

export const categories = (categories=List([]), action) => {
  switch(action.type) {
    case 'FETCH_YEAR': {
        const fetchedData = fromJS(action.payload);
        const categories = fetchedData.get('categories');
        return categories;
    }
    case 'CATEGORY_ADDED':
      return categories.push(Map(action.payload));

    default:
      return categories;
  }
}
