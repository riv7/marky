var React = require('react');
var ReactDOM = require('react-dom');

import { ListGroup } from 'react-bootstrap';

import StudentRow from './studentrow';
import GradeRow from './graderow';

const StudentsTable = ({studentsOfYear}) => {

  const createStudentsTable = () => {
    let rows = [];
    studentsOfYear.forEach(gradeData => {
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
        {createStudentsTable()}
      </ListGroup>
    </div>
  );
}

export default StudentsTable
