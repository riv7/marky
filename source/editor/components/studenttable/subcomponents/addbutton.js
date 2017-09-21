var React = require('react');
var ReactDOM = require('react-dom');

import {Button} from 'react-bootstrap';
import OData from 'react-odata';

const AddButton = ({testSelected, history}) => {

  const baseUrl = 'http://localhost:8080/DemoService/DemoService.svc/Products';
  const query = {};


  const handleClick = (eventKey) => {
    fetch('http://localhost:8000/odata')
      .then(function(response) {
        return response.json()
      )}
    }




  return (
    <Button onClick={handleClick}>add test</Button>
  );
}

export default AddButton;
