var React = require('react');
var ReactDOM = require('react-dom');

import {Button, Glyphicon, Label } from 'react-bootstrap';

const CategoryCell = ({category}) => {
  return (
    <td>
      <Button bsSize="xs"><Glyphicon glyph="edit" /></Button>
      <Button bsSize="xs"><Glyphicon glyph="remove" /></Button>
      <h5><Label bsStyle={category.get('color')}>{category.get('name')}</Label></h5>
    </td>
  );
}

const CategoriesRow = ({marksTableViewModel}) => {

  return (
    <tr>
      <td></td>
        {marksTableViewModel.get('cats').map(cat =>
          <CategoryCell
            key={cat.get('testId')+'_'+cat.get('category').get('id')}
            category={cat.get('category')}
          />
        )}
      <td></td>
    </tr>
  );
}

export default CategoriesRow;
