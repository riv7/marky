import { connect } from 'react-redux';
import { Map } from 'immutable';
import StudentTable from '../components/studenttable';
import { createStudentsViewModel } from '../uiservice/converter';

const mapStateToProps = (state) => {
  return {
    marksTableViewModel: createStudentsViewModel(
      state.students,
      state.tests,
      state.categories
    )
  }
}

const StudentTableContainer = connect(
  mapStateToProps
)(StudentTable)

export default StudentTableContainer
