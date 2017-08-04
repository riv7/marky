var React = require('react');
var ReactDOM = require('react-dom');

const SubmitButton = () => {
  {/*const handleClick = (eventKey) => {
    const result = addTestData
      .get('formdata')
      .set('subject', addTestData.get('subject'));

    testAdded(result);

    history.push('/maintable');
  };*/}

  return (
    <div className="addTestRow">
      <div className="addTestGroup">
        <button className="addTestButton" type="submit" >
          add test
        </button>
      </div>
    </div>
  );
}

export default SubmitButton;
