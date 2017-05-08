var React = require('react');
var ReactDOM = require('react-dom');

import { Col, Form, FormGroup, FormControl, Checkbox, ButtonGroup, ControlLabel, Button } from 'react-bootstrap';

import MarkyHeader from '../markyheader';
import TestMetadataRow from './testmetadatarow';
import CategorySelect from './categoryselect';
import MarkRow from './markrows';
import SubmitButton from './submitbutton';

const AddTest = ({addTestData, addTestFormChanged, testAdded}) => {

  const addTestsForm = (
    <Form horizontal>
      <TestMetadataRow
        addTestData={addTestData}
        addTestFormChanged={addTestFormChanged}
        type={"TEST_NAME"}
        rowLabel={"test name"}
        rowPlaceholder={"enter test name (p.ex.: KA1)..."}
      />
      <TestMetadataRow
        addTestData={addTestData}
        addTestFormChanged={addTestFormChanged}
        type={"WRITTEN_AT"}
        rowLabel={"written at"}
        rowPlaceholder={"dd.MM.yyyy"}
      />
      <CategorySelect
        addTestData={addTestData}
        addTestFormChanged={addTestFormChanged}
        rowLabel={"category"}
        rowPlaceholder={"select..."}
      />

      <div className="border-below"></div>

      {addTestData.get('students').map(student =>
        <MarkRow
          key={student.get('id')}
          addTestData={addTestData}
          addTestFormChanged={addTestFormChanged}
          student={student}
        />
      )}
      <SubmitButton
        addTestData={addTestData}
        testAdded={testAdded}
      />
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
