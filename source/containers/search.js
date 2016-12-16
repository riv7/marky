import { connect } from 'react-redux';
import SearchBar from '../components/search';
import { filterChanged } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    filterText: state.search
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChanged: (filterText) => {dispatch(filterChanged(filterText))}
  }
}
const StatefullSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default StatefullSearchBar
