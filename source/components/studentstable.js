var React = require('react');
var ReactDOM = require('react-dom');

import { ListGroup } from 'react-bootstrap';

import StudentRow from './studentrow';
import GradeRow from './graderow';
import { filterStudents } from './filter'
import { filterGrades } from './filter'

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

export default StudentsTable
