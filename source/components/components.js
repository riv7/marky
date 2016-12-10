var React = require('react');
var ReactDOM = require('react-dom');

//imports react-bootstrap
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
import { ControlLabel } from 'react-bootstrap';

//import other
import {filterStudents} from './filter';
import {filterGrades} from './filter';
import { StatefullSearchBar } from '../containers/containers';

const GradeRow = ({grade}) => {
  return (
    <ListGroupItem bsStyle="info">
      {grade}
    </ListGroupItem>
  );
}

const StudentRow  = ({student}) => {
  return (
    <ListGroupItem>
      {student.name}
    </ListGroupItem>
  );
}

const StudentsTable = ({studentsOfYear, filterText}) => {

  const createStudentsTable = (studentsOfYear) => {
    const filteredStudents = filterStudents(studentsOfYear, filterText);
    const filteredGStudentsAndGrades = filterGrades(filteredStudents, filterText);

    var rows = [];
    filteredGStudentsAndGrades.forEach(gradeData => {
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

export const SearchBar = ({filterChanged, filterText}) => {

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

const YearSelectionBar = ({years}) => {
  const dropdownItems = years.map((year) => {
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
}

export const FilterableStudentsTable = ({filterText, gradesStudentsAndYears}) => {

  const years = gradesStudentsAndYears.map(yearData => {
    const year = {
      id: yearData.id,
      name: yearData.year
    };
    return year;
  });

  const gradesAndStudentsOfYear = gradesStudentsAndYears
    .find(yearData => yearData.year === '2016/2017')
    .gradesAndStudents;




  return (
    <Grid>
      <YearSelectionBar years={years}/>
      <PageHeader>marky <small>search class or student</small></PageHeader>
      <StatefullSearchBar />
      <StudentsTable
        studentsOfYear={gradesAndStudentsOfYear}
        filterText={filterText}
      />
    </Grid>
  );
}
