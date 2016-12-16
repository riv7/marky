import { connect } from 'react-redux';
import FilterableStudentsTable from '../components/filterabletable';
import { filterChanged } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    filterText: state.search,
    year: state.year
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChanged: filterText => dispatch(filterChanged(filterText))
  }
}

const StatefullFilterableStudentsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableStudentsTable);

export default StatefullFilterableStudentsTable
