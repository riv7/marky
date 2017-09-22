var React = require('react');
var ReactDOM = require('react-dom');

import Jumbotron from '../jumbotron';
import BasicGrid from '../basicgrid';
import AufgabenList from './aufgabenlist';
import AufgabenForm from './aufgabenform';
import AufgabenAlert from './aufgabenalert';

class AufgabenPage extends React.Component {

  /*componentDidMount() {
    const {aufgaben, hasErrored, isLoading, fetchData} = this.props;
    fetchData('/DemoService/DemoService.svc/Products?$format=application/json;odata.metadata=minimal');
  }*/

  render() {
    const {aufgaben, hasErrored, isLoading, serverResponse, fetchData} = this.props;
    if (hasErrored) {
      return (
        <div>
          <Jumbotron />
          <p>Sorry! There was an error loading the items</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div>
          <Jumbotron />
          <p>Loading…</p>
        </div>
      );
    }

    const submit = (formValues) => {
      const serviceUrl = formValues.serviceUrl;
      const queryFilter = formValues.queryFilter === undefined ?
        "" : "?$".concat(encodeURI(formValues.queryFilter).trim());
      const completeUrl = serviceUrl.concat(queryFilter);

      fetchData(completeUrl);
    }

    return (
      <div>
        <Jumbotron />
        <BasicGrid dataArea={
            <div>
              <AufgabenForm onSubmit={submit}/>
              <AufgabenList aufgaben={aufgaben} />
              <AufgabenAlert response={serverResponse} />
            </div>
          } />
      </div>
    );
  }
}

export default AufgabenPage;
