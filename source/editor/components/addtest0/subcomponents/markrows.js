var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';
import { Field } from 'redux-form';

import {renderField} from '../../validation/renderfield';
import {required, number, maxValue6} from '../../validation/rules'


const MarkRow = ({ student, disabled }) => {

  return (
    <div className="addTestRow">
      <label className="addTestLabel">{student.get('name')}</label>
      <div className="addTestInput">
        <Field
          name={"markrow-"+student.get('id')}
          type="number"
          component={renderField}
          disabled={disabled}
          validate={maxValue6} />
      </div>
    </div>
  );
}

export default MarkRow;
