import { connect } from 'react-redux';
import { Map } from 'immutable';
import StudentTable from '../components/studenttable/studenttable';
import { createStudentsViewModel } from '../uiservice/converter';
import { testSelected } from '../actions/actions';

const mapStateToProps = (state) => {

  const students = state.subjects2students
    .filter(sub2stud => sub2stud.get('subjectId') === state.selectedSubject)
    .map(sub2studFiltered => state.students.find(student => student.get('id')
    === sub2studFiltered.get('studentId')));

  const tests = state.tests.filter(test =>
    test.get("subject") === state.selectedSubject
  );

  return {
    marksTableViewModel: createStudentsViewModel(
      students,
      tests,
      state.categories
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testSelected: test => dispatch(testSelected(test))
  }
}

const StudentTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTable)

export default StudentTableContainer
