import { connect } from 'react-redux';
import StudentsTable from '../components/studentstable';
import { filterStudents } from '../uiservice/filter';
import { filterGrades } from '../uiservice/filter';
import { filterYear } from '../uiservice/filter';

const mapStateToProps = (state, ownProps) => {
  const gradesAndStudentsOfYear = filterYear(ownProps.gradesStudentsAndYears, state.year);
  const filteredStudents = filterStudents(gradesAndStudentsOfYear, state.search);
  const filteredStudentsAndGrades = filterGrades(filteredStudents, state.search);

  return {
    studentsOfYear: filteredStudentsAndGrades
  }
};

const StatefullStudentsTable = connect(
  mapStateToProps
)(StudentsTable);

export default StatefullStudentsTable;
