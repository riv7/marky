var React = require('react');
var ReactDOM = require('react-dom');

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const SubjectNav = ({subjectData, subjectSelected}) => {

  function handleSelect(selectedKey) {
    subjectSelected(selectedKey);
  }

  const navInstance = (
    <Nav bsStyle="pills" stacked
      activeKey={subjectData.get('selectedSubject')}
      onSelect={handleSelect}>
      {
        subjectData.get('subjects').map(subject =>
          <NavItem
              key={subject.get('id')}
              eventKey={subject.get('id')} href="/home">
            {subject.get('name')}
          </NavItem>)
      }
    </Nav>
  );

  return navInstance;
}

export default SubjectNav;
