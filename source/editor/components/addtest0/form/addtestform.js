var React = require('react');
var ReactDOM = require('react-dom');

import { reduxForm, Field } from 'redux-form'

import TestMetadataRow from '../subcomponents/testmetadatarow';
import CategorySelect from '../subcomponents/categoryselect';
import MarkRow from '../subcomponents/markrows';
import SubmitButton from '../subcomponents/submitbutton';

const AddTestForm = ({addTestData, testAdded, history, handleSubmit}) => {

  return (
    <form className="addTestForm" onSubmit={handleSubmit}>
      <TestMetadataRow
        name="addTestName"
        rowLabel={"test name"}
        placeholder={"enter test name (p.ex.: KA1)..."} />
      <TestMetadataRow
        name="addTestWrittenAt"
        rowLabel={"written at"}
        placeholder={"dd.MM.yyyy"} />
      <CategorySelect
        addTestData={addTestData}
        rowLabel={"category"}
        placeholder={"select..."} />
      <div className="border-below"></div>
      {addTestData.get('students').map(student =>
        <MarkRow
          key={student.get('id')}
          student={student}
        />
      )}
      <SubmitButton />
    </form>
  );
}

export default reduxForm({
  form: 'addtestform' // a unique identifier for this form
})(AddTestForm)
