var React = require('react');
var ReactDOM = require('react-dom');

import { ListGroup } from 'react-bootstrap';

import StudentRow from './studentrow';
import GradeRow from './graderow';

const StudentsTable = ({studentsOfYear}) => {

  const createStudentsTable = () => {
    let rows = [];
    studentsOfYear.forEach(gradeData => {
      rows.push(<GradeRow grade={gradeData.get('grade')} key={'grade_'+gradeData.get('id')} />);

      gradeData.get('students').forEach(student => {
        rows.push(<StudentRow student={student} key={'student_'+student.get('id')} />);
      });
    })
    return rows;
  }

  const createStudentsTable2 = () => {
    let rows = [];
    studentsOfYear.forEach(gradeData => {
      rows.push(
        <GradeRow
          grade={gradeData.get('grade')}
          key={gradeData.get('id')}
        />);

      gradeData.get('students').forEach(student => {
        rows.push(
          <StudentRow
            student={student}
            key={student.get('id')}
          />);
      });
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
