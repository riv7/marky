import { connect } from 'react-redux';
import { Map } from 'immutable';
import SubjectNav from '../components/subjectnav';
import { subjectSelected, subjectAdded } from '../actions/actions';

const mapStateToProps = (state) => {
  const result = Map({
    selectedSubject: state.selectedSubject,
    subjects: state.subjects
  })

  return {
    subjectData: result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    subjectSelected: subject => dispatch(subjectSelected(subject)),
    subjectAdded: subjectName => dispatch(subjectAdded(subjectName))
  }
}

const SubjectNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectNav)

export default SubjectNavContainer
