var React = require('react');
var ReactDOM = require('react-dom');

import {Button} from 'react-bootstrap';

const AddButton = ({marksTableViewModel,addTestFormInitialized, history}) => {

  const handleClick = (eventKey) => {
    const students = marksTableViewModel.get('studentsTableData').map(data =>
      data.get('student')
    );
    addTestFormInitialized(students)
    history.push('/addtest');
  };

  return (
    <Button onClick={handleClick}>add test</Button>
  );
}

export default AddButton;
