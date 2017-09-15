var React = require('react');
var ReactDOM = require('react-dom');

import {Button, Glyphicon, Label } from 'react-bootstrap';

const CategoryCell = ({category, testId, testSelected, history}) => {

  const handleClick = (event) => {
    testSelected(testId)
    history.push('/addtest');
  };

  return (
    <td>
      <Button bsSize="xs" onClick={handleClick}><Glyphicon glyph="edit" /></Button>
      <Button bsSize="xs"><Glyphicon glyph="remove" /></Button>
      <h5><Label bsStyle={category.get('color')}>{category.get('name')}</Label></h5>
    </td>
  );
}

const CategoriesRow = ({marksTableViewModel, testSelected, history}) => {

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
              history={history}
            />
          )}
        <td></td>
      </tr>
    </tbody>
  );
}

export default CategoriesRow;
