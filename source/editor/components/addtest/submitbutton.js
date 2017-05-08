var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from '../markyheader';

const SubmitButton = ({addTestData, testAdded}) => {
  const handleClick = (eventKey) => {
    const result = addTestData
      .get('formdata')
      .set('subject', addTestData.get('subject'))

    testAdded(result);
  };

  return (
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={handleClick} type="submit">
          submit
        </Button>
      </Col>
    </FormGroup>
  );
}

export default SubmitButton;
