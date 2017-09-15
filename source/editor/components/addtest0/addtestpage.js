var React = require('react');
var ReactDOM = require('react-dom');

import { List, Map } from 'immutable';

import MarkyHeader from '../markyheader';
import AddTestForm from './form/addtestform';

const AddTestPage = ({addTestData, testAdded, history}) => {

  const isNewTest = addTestData.get('test').isEmpty();
  const existingId = isNewTest ? -1 : addTestData.get('test').get('id');

  const submit = (testFormValues) => {
    testFormValues["addTestSubject"] = addTestData.get("subject").get('id');
    testAdded(testFormValues, existingId);
    history.push('/maintable');
  }

  const testMarks = () => {
    let result = {};
    addTestData.get('test').get('marks').forEach(entry =>
      result["markrow-"+entry.get('student')] = entry.get('mark')
    )
    return result;
  }

  const initData = (isNewTest) ? {} :
    {
      addTestName: addTestData.get('test').get('name'),
      addTestWrittenAt: addTestData.get('test').get('written'),
      addTestSelect: addTestData.get('test').get('category'),
      marks: testMarks()
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
          initialValues={initData}
          addTestData={addTestData}
          testAdded={testAdded}
          history={history}
          onSubmit={submit} />
      }
    />
  );
}

export default AddTestPage;
