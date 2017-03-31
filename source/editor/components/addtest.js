var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from './markyheader';

const AddTest = ({addTestData}) => {

  const TestNameRow = () => {
    return (
      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          {"test name"}
        </Col>
        <Col sm={8}>
          <FormControl type="text" placeholder="enter test name (p.ex.: KA1)..." />
        </Col>
        <Col sm={2}></Col>
      </FormGroup>
    );
  }

  const AddTestRow = ({student}) => {
    return (
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          {student.get('name')}
        </Col>
        <Col sm={8}>
          <FormControl type="text" placeholder="Enter mark..." />
        </Col>
        <Col sm={2}></Col>
      </FormGroup>
    );
  }

  const addTestsForm = (
    <Form horizontal>
      <TestNameRow />
      {addTestData.get('students').map(student =>
        <AddTestRow
          key={student.get('id')}
          student={student}
        />
      )}
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            submit
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );



  const addTestsForm2 = (
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
