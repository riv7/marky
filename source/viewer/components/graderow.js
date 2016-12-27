var React = require('react');
var ReactDOM = require('react-dom');

import { ListGroupItem } from 'react-bootstrap';

const GradeRow = ({grade}) => {
  return (
    <ListGroupItem bsStyle="info">
      {grade}
    </ListGroupItem>
  );
}

export default GradeRow;
