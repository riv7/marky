var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from '../markyheader';

const TestMetadataRow = ({addTestData, addTestFormChanged, type, rowLabel, rowPlaceholder}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    addTestFormChanged(type, text);
  };

  let formValue;
  switch(type) {
    case 'TEST_NAME' :
      formValue = addTestData.get('formdata').get('testname');
      break;
    case 'WRITTEN_AT' :
      formValue = addTestData.get('formdata').get('writtenat');
      break;
  }

  return (
    <FormGroup controlId="formHorizontalText">
      <Col componentClass={ControlLabel} sm={2}>
        {rowLabel}
      </Col>
      <Col sm={8}>
        <FormControl
          type="text"
          placeholder={rowPlaceholder}
          value={formValue}
          onChange={handleChange}
           />
      </Col>
      <Col sm={2}></Col>
    </FormGroup>

  );
}

export default TestMetadataRow;
