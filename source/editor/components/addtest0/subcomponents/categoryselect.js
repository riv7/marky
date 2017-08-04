var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';
import { Field } from 'redux-form'

const CategoryOptionValue = ({category}) => {
  return (
    <option value={category.get('id')}>{category.get('name')}</option>
  );
}

const CategorySelect = ({addTestData, rowLabel, placeholder}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    alert("text: "+text);
  };

  return (
    <div className="addTestRow">
      <label className="addTestLabel">{rowLabel}</label>
      <div className="addTestInput">
        <Field name="addTestSelect" className="addTestField" component="select" placeholder={placeholder}>
          {addTestData.get('categories').map(category =>
            <CategoryOptionValue
              key={category.get('id')}
              category={category}
              onChange={handleChange}
            />
          )}
        </Field>
      </div>      
    </div>
  );
}

export default CategorySelect;
