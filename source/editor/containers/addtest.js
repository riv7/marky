import { connect } from 'react-redux';
import { Map } from 'immutable';
import AddTestPage from '../components/addtest0/addtestpage';
import { addTestFormChanged, testAdded } from '../actions/actions';

const mapStateToProps = (state) => {

{/*todo remove code dupicate*/}
  const students = state.subjects2students
    .filter(sub2stud => sub2stud.get('subjectId') === state.selectedSubject)
    .map(sub2studFiltered => state.students.find(student => student.get('id')
    === sub2studFiltered.get('studentId')));

  const selectedSubject = state.subjects
    .filter(sub => sub.get('id') === state.selectedSubject)
    .first();

  const allCategories = state.categories;

  return {
    addTestData: Map({
      subject: selectedSubject,
      students: students,
      categories: allCategories,
      formdata: state.testFormData
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAdded: (testFormData) => dispatch(testAdded(testFormData))
  }
}

const AddTestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTestPage)

export default AddTestContainer
