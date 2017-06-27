var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

const SubmitButton = ({addTestData, testAdded, history}) => {
  const handleClick = (eventKey) => {
    const result = addTestData
      .get('formdata')
      .set('subject', addTestData.get('subject'));

    testAdded(result);

    history.push('/maintable');
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
