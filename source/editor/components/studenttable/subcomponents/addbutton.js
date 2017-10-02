var React = require('react');
var ReactDOM = require('react-dom');

import {Button} from 'react-bootstrap';

const AddButton = ({testSelected, history}) => {

  const handleClick = (eventKey) => {
    testSelected(-1)
    history.push('/addtest');
  };

  return (
    <Button onClick={handleClick}>add test</Button>
  );
}

export default AddButton;
