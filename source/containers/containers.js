import { connect } from 'react-redux';
import * as components from '../components/components';
import { filterChanged } from '../actions/actions';

export const FilterableStudentsTable = connect(
  function mapStateToProps(state, ownProps) {
    return {
      ownProps,
      filterText: state
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      filterChanged: filterText => dispatch(filterChanged(filterText))
    };
  }
)(components.FilterableStudentsTable);

export const StatefullSearchBar = connect(
  function mapStateToProps(state, ownProps) {
    return {
      ownProps,
      filterText: state
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      filterChanged: filterText => dispatch(filterChanged(filterText))
    };
  }
)(components.SearchBar);
