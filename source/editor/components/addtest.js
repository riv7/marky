var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import HeadNav from './headnav';
import MarkyHeader from './markyheader';

const AddTest = () => {

  const addTestsForm = (
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={8}>
          <FormControl type="email" placeholder="Email" />
        </Col>
        <Col sm={2}></Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={8}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      <Col sm={2} />
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );

  return (
    <MarkyHeader detailText={"enter marks"} dataArea= {addTestsForm} />
  );
}

export default AddTest;
