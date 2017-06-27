var React = require('react');
var ReactDOM = require('react-dom');

import {Label} from 'react-bootstrap';

const AverageCell = ({avg}) => {
  if (avg >= 5) {
    return <td><Label bsStyle="danger">{avg}</Label></td>;
  } else if (avg >= 4) {
    return <td><Label bsStyle="warning">{avg}</Label></td>;
  } else {
    return <td><Label bsStyle="success">{avg}</Label></td>;
  }
}

export default AverageCell;
