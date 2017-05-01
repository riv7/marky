var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from './markyheader';

const AddTest = ({addTestData, addTestFormChanged}) => {

  const TestMetadataRow = ({type, rowLabel, rowPlaceholder}) => {

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

  const CategoryOptionValue = ({category}) => {
    return (
      <option value={category.get('id')}>{category.get('name')}</option>
    );
  }

  const CategorySelect = ({rowLabel, rowPlaceholder}) => {

    const handleChange = (event) => {
      const input = event.target;
      const text = input.value;
      addTestFormChanged("CATEGORY", text);
    };

    const formValue = addTestData.get('formdata').get('category');

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
                value={formValue}
                onChange={handleChange}
              />
            )}
          </FormControl>
        </Col>
        <Col sm={2}></Col>
      </FormGroup>
    );
  }

  const StudentRow = ({student}) => {

    const handleChange = (event) => {
      const input = event.target;
      const text = input.value;
      addTestFormChanged("MARKS", text), student.get('id');
    };

    const formMark = addTestData.get('formdata').get('marks')
      .filter(mark => mark.get('id') === student.get('id'))
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

  const SubmitButton = () => {
    const handleClick = (eventKey) => {
      alert('create test object')
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

  const addTestsForm = (
    <Form horizontal>
      <TestMetadataRow
        type={"TEST_NAME"}
        rowLabel={"test name"}
        rowPlaceholder={"enter test name (p.ex.: KA1)..."}
      />
      <TestMetadataRow
        type={"WRITTEN_AT"}
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
      <SubmitButton />
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
