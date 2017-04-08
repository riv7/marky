import { connect } from 'react-redux';
import { Map } from 'immutable';
import AddTest from '../components/addtest';

const mapStateToProps = (state) => {

{/*todo remove code dupicate*/}
  const students = state.subjects2students
    .filter(sub2stud => sub2stud.get('subjectId') === state.selectedSubject)
    .map(sub2studFiltered => state.students.find(student => student.get('id')
    === sub2studFiltered.get('studentId')));

  const selectedSubject = state.subjects
    .filter(sub => sub.get('id') === state.selectedSubject)
    .first();

  return {
    addTestData: Map({
      subject: selectedSubject,
      students: students
    })
  }
}

const AddTestContainer = connect(
  mapStateToProps
)(AddTest)

export default AddTestContainer
