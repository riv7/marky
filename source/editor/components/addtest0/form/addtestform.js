var React = require('react');
var ReactDOM = require('react-dom');

import { reduxForm, Field, FieldArray, FormSection } from 'redux-form'

import TestMetadataRow from '../subcomponents/testmetadatarow';
import CategorySelect from '../subcomponents/categoryselect';
import MarkRow from '../subcomponents/markrows';
import SubmitControl from '../subcomponents/submitcontrol';

class AddTestForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled:true
    }

    this.handleEnabledChange = this.handleEnabledChange.bind(this)
  }

  handleEnabledChange(value) {
    this.setState({
      disabled: !value
    })
  }

  componentDidMount() {
    const {addTestData, testAdded, history, handleSubmit} = this.props;
  }

  render() {
    const {addTestData, testAdded, history, handleSubmit} = this.props;
    const isNewTest = addTestData.get('test').isEmpty();

    const disabledValue = (!isNewTest && this.state.disabled) ? true : false;

    return (
      <form className="addTestForm" onSubmit={handleSubmit}>
        <TestMetadataRow
          name="addTestName"
          rowLabel={"test name"}
          placeholder={"enter test name (p.ex.: KA1)..."}
          disabled={disabledValue} />
        <TestMetadataRow
          name="addTestWrittenAt"
          rowLabel={"written at"}
          placeholder={"dd.MM.yyyy"}
          disabled={disabledValue} />
        <CategorySelect
          addTestData={addTestData}
          rowLabel={"category"}
          placeholder={"select..."}
          disabled={disabledValue} />
        <div className="border-below"></div>
        <FormSection name="marks">
        {addTestData.get('students').map(student =>
            <MarkRow
              key={student.get('id')}
              student={student}
              disabled={disabledValue}
            />
        )}
        </FormSection>
        <SubmitControl
          isNewTest={isNewTest}
          disabled={disabledValue}
          onEnabledClick={this.handleEnabledChange} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'addtestform'
})(AddTestForm)
