var React = require('react');
var ReactDOM = require('react-dom');

import { Field } from 'redux-form'

const TestMetadataRow = ({name, rowLabel, placeholder, disabled}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    alert("metadata: "+text);
  };

  return (
    <div className="addTestRow">
      <label className="addTestLabel">{rowLabel}</label>
      <div className="addTestInput">
        <Field
          className="addTestField"
          name={name}
          component="input"
          type="text"
          placeholder={placeholder}
          disabled={disabled} />
      </div>
    </div>
  );
}

export default TestMetadataRow;
