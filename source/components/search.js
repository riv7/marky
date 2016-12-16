var React = require('react');
var ReactDOM = require('react-dom');

import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const SearchBar = ({filterChanged, filterText}) => {

  const handleChange = (event) => {
    const input = event.target;
    const text = input.value;
    filterChanged(text);
  };

  return (
    <FormGroup>
      <ControlLabel>enter search criteria - class or student:</ControlLabel>
      <FormControl
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleChange}
      />
    </FormGroup>
  );
}

export default SearchBar;
