var React = require('react');
var ReactDOM = require('react-dom');

import { ListGroupItem } from 'react-bootstrap';

const StudentRow  = ({student}) => {
  return (
    <ListGroupItem>
      {student.name}
    </ListGroupItem>
  );
}

export default StudentRow;
