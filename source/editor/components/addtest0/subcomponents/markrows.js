var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';
import { Field } from 'redux-form'

const MarkRow = ({ student }) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    alert("MARKS: "+text);
  };

  return (
    <div className="addTestRow">
      <label className="addTestLabel">{student.get('name')}</label>
      <div className="addTestInput">
        <Field
          className="addTestField"
          name={"markrow-"+student.get('id')}
          component="input"
          type="text" />
      </div>
    </div>
  );
}

export default MarkRow;
