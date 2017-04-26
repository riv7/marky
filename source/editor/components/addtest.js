var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from './markyheader';

const AddTest = ({addTestData}) => {

  const TestMetadataRow = ({rowLabel, rowPlaceholder}) => {
    return (
      <FormGroup controlId="formHorizontalText">
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

  const CategoryOptionValue = ({category}) => {
    return (
      <option value={category.get('id')}>{category.get('name')}</option>
    );
  }

  const CategorySelect = ({rowLabel, rowPlaceholder}) => {
    return (
      <FormGroup controlId="formHorizontalSelect">
        <Col componentClass={ControlLabel} sm={2}>
          {rowLabel}
        </Col>
        <Col sm={8}>
          <FormControl componentClass="select" placeholder={rowPlaceholder} >
            {addTestData.get('categories').map(category =>
              <CategoryOptionValue
                key={category.get('id')}
                category={category}
              />
            )}
          </FormControl>
        </Col>
        <Col sm={2}></Col>
      </FormGroup>

    );
  }

  const StudentRow = ({student}) => {
    return (
      <FormGroup controlId="formHorizontalText">
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
      <TestMetadataRow
        rowLabel={"written at"}
        rowPlaceholder={"dd.MM.yyyy"}
      />
      <CategorySelect
        rowLabel={"category"}
        rowPlaceholder={"select..."}
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


  return (
    <MarkyHeader detailText={
      "enter marks for "+
      addTestData.get("subject").get('name')+" "+
      addTestData.get("subject").get('scope')
    } dataArea= {addTestsForm} />
  );
}

export default AddTest;
