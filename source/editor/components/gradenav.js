var React = require('react');
var ReactDOM = require('react-dom');

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const CourseNav = () => {

  function handleSelect(selectedKey) {
    {/*alert('selected ' + selectedKey);*/}
  }

  const buttonGroupInstance = (
    <ButtonGroup vertical block>
      <Button>7a</Button>
      <Button>8b</Button>
      <Button>10c</Button>
    </ButtonGroup>
  );

  const navInstance = (
    <Nav bsStyle="pills" stacked onSelect={handleSelect}>
      <NavItem eventKey={1} href="/home">Klasse 7a</NavItem>
      <NavItem eventKey={2} title="Item">Klasse 8b</NavItem>
      <NavItem eventKey={3} href="#">Klasse 10c</NavItem>
    </Nav>
  );

  return navInstance;
}

export default CourseNav;
