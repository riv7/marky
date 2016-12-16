import { connect } from 'react-redux';
import YearSelectionBar from '../components/year';
import { yearChanged } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    year: state.year
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    yearChanged: year => dispatch(yearChanged(year))
  }
}

const StatefullYearSelectionBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(YearSelectionBar)

export default StatefullYearSelectionBar
