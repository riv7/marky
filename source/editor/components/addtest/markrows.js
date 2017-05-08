var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from '../markyheader';

const MarkRow = ({addTestData, addTestFormChanged, student}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    addTestFormChanged("MARKS", text, student.get('id'));
  };

  const formMark = addTestData.get('formdata').get('marks')
    .filter(mark => mark.get('student') === student.get('id'))
    .first();
  const formValue = formMark.get('mark');

  return (
    <FormGroup controlId="formHorizontalText">
      <Col componentClass={ControlLabel} sm={2}>
        {student.get('name')}
      </Col>
      <Col sm={8}>
        <FormControl
          type="text"
          placeholder="Enter mark..."
          value={formValue}
          onChange={handleChange}
        />
      </Col>
      <Col sm={2}></Col>
    </FormGroup>
  );
}

export default MarkRow;
