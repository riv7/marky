var React = require('react');
var ReactDOM = require('react-dom');

import { reduxForm, Field } from 'redux-form';

const AufgabenForm = ({handleSubmit}) => {

  return (
    <form className="netoInputForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon3">"http://oData/service"</span>
          <Field
            name="serviceUrl"
            component="input"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon3">"queryFilter"</span>
          <Field
            name="queryFilter"
            component="input"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3" />
        </div>
      </div>
      <input className="netoButton" type="submit" value="Send" />
      <br />
    </form>
  );
}

export default reduxForm({
  form: 'aufgabenform',
  initialValues: {
    serviceUrl: "/DemoService/DemoService.svc/Products?$format=application/json;odata.metadata=minimal"
  }
})(AufgabenForm)
