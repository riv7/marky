var React = require('react');
var ReactDOM = require('react-dom');

const SubmitControl = ({isNewTest, disabled, onEnabledClick}) => {

  const handleClick = (eventKey) => {
    onEnabledClick(true);
  };

  if (isNewTest) {
    return (
      <div className="addTestRow">
        <div className="addTestGroup">
          <button className="addTestButton" type="submit" >
            add test
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="addTestRow">
        <div className="addTestGroup">
          <button className="addTestButton" disabled={disabled} type="submit" >
            save
          </button>
          <button className="addTestButton" onClick={handleClick} type="button" >
            edit
          </button>
        </div>
      </div>
    );
  }
}

export default SubmitControl;
