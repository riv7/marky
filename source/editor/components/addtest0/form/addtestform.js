var React = require('react');
var ReactDOM = require('react-dom');

import { reduxForm, Field, FieldArray, FormSection } from 'redux-form'

import TestMetadataRow from '../subcomponents/testmetadatarow';
import CategorySelect from '../subcomponents/categoryselect';
import MarkRow from '../subcomponents/markrows';
import SubmitButton from '../subcomponents/submitbutton';

class AddTestForm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {addTestData, testAdded, history, handleSubmit} = this.props;
  }

  render() {
    const {addTestData, testAdded, history, handleSubmit} = this.props;

    {/*const markFields = ({fields,meta}) => {
      //addTestData.get('students').forEach(student => fields.push(student.get('id')))

      return (
        <div>
          {fields.map(student =>
            <MarkRow
              key={student.get('id')}
              student={student}
            />
          )}
        </div>
      )
    }*/}

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
        <FormSection name="marks">
        {
          addTestData.get('students').map(student =>
            <MarkRow
              key={student.get('id')}
              student={student}
            />
          )
        }
        </FormSection>
        <SubmitButton />
      </form>
    );
  }
}

export default reduxForm({
  form: 'addtestform'
})(AddTestForm)
