var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';
import { Field } from 'redux-form'

const MarkRow0 = ({ field }) => {

  return (
    <div className="addTestRow">
      <label className="addTestLabel">Student1</label>
      <div className="addTestInput">
        <Field
          className="addTestField"
          name={"markrow-1"}
          component="input"
          type="text" />
      </div>
    </div>
  );
}

export default MarkRow0;
