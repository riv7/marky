import { connect } from 'react-redux';
import { Map } from 'immutable';
import GradeNav from '../components/gradenav';
import { gradeSelected, gradeAdded } from '../actions/actions';

const mapStateToProps = (state) => {
  const result = Map({
    selectedGrade: state.selectedGrade,
    grades: state.grades
  })

  return {
    gradeData: result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gradeSelected: grade => dispatch(gradeSelected(grade)),
    gradeAdded: gradeName => dispatch(gradeAdded(gradeName))
  }
}

const GradeNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GradeNav)

export default GradeNavContainer
