var React = require('react');
var ReactDOM = require('react-dom');

//imports react-bootstrap
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

export function GradeRow(props) {
  const {grade} = props;
  return (
    <ListGroupItem bsStyle="info">
      {grade}
    </ListGroupItem>
  );
}

export function StudentRow(props) {
  const {student} = props;
  return (
    <ListGroupItem>
      {student.name}
    </ListGroupItem>
  );
}

export function StudentsTable(props) {
  const {studentsOfYear} = props;

  function createStudentsTable(students) {
    var rows = [];
    students.forEach(gradeData => {
      if (!gradeData.students.isEmpty) {
        rows.push(<GradeRow grade={gradeData.grade} key={'grade_'+gradeData.id} />);

        gradeData.students.forEach(student => {
          rows.push(<StudentRow student={student} key={'student_'+student.id} />);
        });
      };
    })
    return rows;
  }

  return (
    <div>
      <ListGroup>
        {createStudentsTable(studentsOfYear)}
      </ListGroup>
    </div>
  );
}

export function SearchBar() {
  return (
    <FormGroup>
      <FormControl type="text" placeholder="Search..." />
    </FormGroup>
  );
}

export function YearSelectionBar(props) {
  const {years} = props;

  var dropdownItems = years.map((year) => {
    return (
      <MenuItem key={year.id} eventKey={year.id}>
      {year.name}
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
        <Nav pullRight>
          <NavDropdown
            eventKey={0}
            title="select year"
            id="select year dropdown">
            {dropdownItems}
          </NavDropdown>
        </Nav>
        <Navbar.Text pullRight>
          2016/2017
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )

  //Simple select without React Bootstarp
  //var entries = years.map((year) => {
  //  return (<option value={year}>{year}</option>)
  //});
  //return (
  //  <form>
  //    <select>
  //      {entries}
  //    </select>
  //  </form>
  //);
}

export function FilterableStudentsTable(props) {
  var grades = props.gradesStudentsAndYears;
  const [gradesAndStudentsOfYear, years] = grades;

  return (
    <Grid>
      <YearSelectionBar years={years}/>
      <PageHeader>marky <small>search class or student</small></PageHeader>
      <SearchBar />
      <StudentsTable studentsOfYear={gradesAndStudentsOfYear} />
    </Grid>
  );
}
