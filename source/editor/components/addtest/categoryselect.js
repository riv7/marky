var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from '../markyheader';

const CategoryOptionValue = ({category}) => {
  return (
    <option value={category.get('id')}>{category.get('name')}</option>
  );
}

const CategorySelect = ({addTestData, addTestFormChanged, rowLabel, rowPlaceholder}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    addTestFormChanged("CATEGORY", text);
  };

  const formValue = addTestData.get('formdata').get('category');

  return (
    <FormGroup controlId="formHorizontalSelect">
      <Col componentClass={ControlLabel} sm={2}>
        {rowLabel}
      </Col>
      <Col sm={8}>
        <FormControl componentClass="select" placeholder={rowPlaceholder} >
          {addTestData.get('categories').map(category =>
            <CategoryOptionValue
              key={category.get('id')}
              category={category}
              value={formValue}
              onChange={handleChange}
            />
          )}
        </FormControl>
      </Col>
      <Col sm={2}></Col>
    </FormGroup>
  );
}

export default CategorySelect;
