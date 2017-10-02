import { connect } from 'react-redux';
import StudentTable from '../components/studenttable/studenttable';
import { createStudentsViewModel, wrapLoadingState } from '../uiservice/converter';
import { testSelected, testRemoved } from '../actions/actions';
import { fetchData } from '../actions/fetch';

const mapStateToProps = (state) => {

  const students = state.subjects2students
    .filter(sub2stud => sub2stud.get('subjectId') === state.selectedSubject)
    .map(sub2studFiltered => state.students.find(student => student.get('id')
    === sub2studFiltered.get('studentId')));

  const tests = state.tests.filter(test =>
    test.get("subject") === state.selectedSubject
  );

  const loadingState = wrapLoadingState(state.hasErrored, state.isLoading);

  return {
    marksTableViewModel: createStudentsViewModel(
      students,
      tests,
      state.categories
    ),
    loadingState: loadingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testSelected: test => dispatch(testSelected(test)),
    testRemoved: test => dispatch(testRemoved(test)),
    fetchData: (url) => dispatch(fetchData(url))
  };
};

const StudentTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTable);

export default StudentTableContainer
