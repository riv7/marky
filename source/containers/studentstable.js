import { connect } from 'react-redux';
import StudentsTable from '../components/studentstable';
import { filterChanged } from '../actions/actions';
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

const mapDispatchToProps = (dispatch) => {
  return {
    filterChanged: filterText => dispatch(filterChanged(filterText))
  }
};

const StatefullStudentsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsTable);

export default StatefullStudentsTable;
