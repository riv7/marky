var React = require('react');
var ReactDOM = require('react-dom');

import { Field } from 'redux-form'

const CategoryOptionValue = ({category, disabled}) => {
  return (
    <option value={category.get('id')}>
      {category.get('name')}
    </option>
  );
}

const CategorySelect = ({addTestData, rowLabel, placeholder, disabled}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    alert("text: "+text);
  };

  return (
    <div className="addTestRow">
      <label className="addTestLabel">{rowLabel}</label>
      <div className="addTestInput">
        <Field name="addTestSelect"
           className="addTestField"
           component="select"
           disabled={disabled}
           placeholder={placeholder}>
          {addTestData.get('categories').map(category =>
            <CategoryOptionValue
              key={category.get('id')}
              category={category}
              disabled={disabled}
              onChange={handleChange}
            />
          )}
        </Field>
      </div>
    </div>
  );
}

export default CategorySelect;
