var React = require('react');
var ReactDOM = require('react-dom');

import {Button, Glyphicon, Label } from 'react-bootstrap';

const CategoryCell = ({category, testId, testSelected, testRemoved, history}) => {

  const handleEditClick = (event) => {
    testSelected(testId);
    history.push('/addtest');
  };

  const handleDeleteClick = (event) => {
    testRemoved(testId);
  };

  return (
    <td>
      <Button bsSize="xs" onClick={handleEditClick}><Glyphicon glyph="edit" /></Button>
      <Button bsSize="xs" onClick={handleDeleteClick}><Glyphicon glyph="remove" /></Button>
      <h5><Label bsStyle={category.get('color')}>{category.get('name')}</Label></h5>
    </td>
  );
}

const CategoriesRow = ({marksTableViewModel, testSelected, testRemoved, history}) => {

  return (
    <tbody>
      <tr>
        <td></td>
          {marksTableViewModel.get('cats').map(cat =>
            <CategoryCell
              key={cat.get('testId')+'_'+cat.get('category').get('id')}
              category={cat.get('category')}
              testId={cat.get('testId')}
              testSelected={testSelected}
              testRemoved={testRemoved}
              history={history}
            />
          )}
        <td></td>
      </tr>
    </tbody>
  );
}

export default CategoriesRow;
