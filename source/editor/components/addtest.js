var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from './markyheader';

const AddTest = ({addTestData}) => {

  const TestMetadataRow = ({rowLabel, rowPlaceholder}) => {
    return (
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          {rowLabel}
        </Col>
        <Col sm={8}>
          <FormControl type="text" placeholder={rowPlaceholder} />
        </Col>
        <Col sm={2}></Col>
      </FormGroup>
    );
  }

  const StudentRow = ({student}) => {
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
      <TestMetadataRow
        rowLabel={"test name"}
        rowPlaceholder={"enter test name (p.ex.: KA1)..."}
      />
      <div className="border-below"></div>
      {addTestData.get('students').map(student =>
        <StudentRow
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
    <MarkyHeader detailText={
      "enter marks for "+
      addTestData.get("subject").get('name')+" "+
      addTestData.get("subject").get('scope')
    } dataArea= {addTestsForm} />
  );
}

export default AddTest;
