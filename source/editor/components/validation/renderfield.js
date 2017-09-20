var React = require('react');
var ReactDOM = require('react-dom');

export const renderField = ({ input, type, placeholder,
  meta: { touched, error, warning } }) => (
  <div>
    <input {...input}
      className="addTestField"
      placeholder={placeholder}
      type={type}/>
    {touched
      && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
    }
  </div>
);
