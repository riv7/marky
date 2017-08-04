var React = require('react');
var ReactDOM = require('react-dom');

import { List, Map } from 'immutable';

import MarkyHeader from '../markyheader';
import AddTestForm from './form/addtestform';

const AddTestPage = ({addTestData, testAdded, history}) => {

  const submit = (testFormValues) => {

    {/*const testFormTO = Map({
      testName: testFormValues.addTestName,
      writtenAt: testFormValues.addTestWrittenAt,
      categoryId: testFormValues.addTestSelect
      marks:
    }*/}

    // print the form values to the console
     alert(values)
  }

  return (
    <MarkyHeader
      detailText={
        "enter marks for "+
        addTestData.get("subject").get('name')+" "+
        addTestData.get("subject").get('scope')
      }
      dataArea={
        <AddTestForm
          addTestData={addTestData}
          testAdded={testAdded}
          history={history}
          onSubmit={submit} />
      }
    />
  );
}

export default AddTestPage;
