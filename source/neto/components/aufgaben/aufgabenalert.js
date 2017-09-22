var React = require('react');
var ReactDOM = require('react-dom');

const AufgabenAlert = ({response}) => {

  return (
    <div className="alert alert-success" role="alert">
      <br/>
      <h4 className="alert-heading">Well done!</h4>
      <p>{response}</p>
      <hr />
      <p className="mb-0">Great oData.</p>
    </div>
  );
}

export default AufgabenAlert;
