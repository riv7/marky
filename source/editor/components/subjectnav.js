var React = require('react');
var ReactDOM = require('react-dom');

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const SubjectNav = ({subjectData}) => {

  function handleSelect(selectedKey) {
    {/*alert('selected ' + selectedKey);*/}
  }

  const navInstance = (
    <Nav bsStyle="pills" stacked onSelect={handleSelect}>
      {
        subjectData.get('subjects').map(subject =>
          <NavItem eventKey={1} href="/home">{subject.get('name')}</NavItem>)
      }
    </Nav>
  );

  return navInstance;
}

export default SubjectNav;
