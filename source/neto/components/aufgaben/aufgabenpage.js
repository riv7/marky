var React = require('react');
var ReactDOM = require('react-dom');

import Jumbotron from '../jumbotron';
import BasicGrid from '../basicgrid';
import AufgabenList from './aufgabenlist';
import AufgabenForm from './aufgabenform';

class AufgabenPage extends React.Component {

  /*componentDidMount() {
    const {aufgaben, hasErrored, isLoading, fetchData} = this.props;
    fetchData('/DemoService/DemoService.svc/Products?$format=application/json;odata.metadata=minimal');
  }*/

  render() {
    const {aufgaben, hasErrored, isLoading, fetchData} = this.props;
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
      fetchData(formValues.serviceUrl);
    }

    return (
      <div>
        <Jumbotron />
        <BasicGrid dataArea={
            <div>
              <AufgabenForm onSubmit={submit}/>
              <AufgabenList aufgaben={aufgaben} />
            </div>
          } />
      </div>
    );
  }
}

export default AufgabenPage;
