var React = require('react');
var ReactDOM = require('react-dom');

import { MenuItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const YearSelectionBar = ({year, yearChanged, years}) => {

  const handleSelect = (eventKey) => {
    const text = eventKey;
    yearChanged(text);
  };

  const dropdownItems = years.map((ye) => {
    return (
      <MenuItem key={ye.id} eventKey={ye.name}>
      {ye.name}
    </MenuItem>)
  });

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">marky</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight onSelect={handleSelect}>
          <NavDropdown
            eventKey={0}
            title="select year"
            id="select year dropdown">
            {dropdownItems}
          </NavDropdown>
        </Nav>
        <Navbar.Text pullRight>
          {year}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default YearSelectionBar
