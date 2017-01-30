var React = require('react');
var ReactDOM = require('react-dom');

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const GradeNav = ({gradeData, gradeSelected}) => {

  function handleSelect(selectedKey) {
    gradeSelected(selectedKey);
  }

  const navInstance = (
    <Nav bsStyle="pills" stacked
      activeKey={gradeData.get('selectedGrade')}
      onSelect={handleSelect}>
      {
        gradeData.get('grades').map(grade =>
          <NavItem eventKey={grade.get('id')} href="/home">
            {grade.get('name')}
          </NavItem>)
      }
    </Nav>
  );

  return navInstance;
}


export default GradeNav;
