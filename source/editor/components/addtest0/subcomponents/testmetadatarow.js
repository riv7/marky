var React = require('react');
var ReactDOM = require('react-dom');

import { Field } from 'redux-form'
import {renderField} from '../../validation/renderfield'
import {required} from '../../validation/rules'

const TestMetadataRow = ({name, rowLabel, placeholder, disabled}) => {

  return (
    <div className="addTestRow">
      <label className="addTestLabel">{rowLabel}</label>
      <div className="addTestInput">
        <Field
          name={name}
          type="text"
          placeholder={placeholder}
          component={renderField}
          disabled={disabled}
          validate={required} />
      </div>
    </div>
  );
}

export default TestMetadataRow;
