import { connect } from 'react-redux';
import AufgabenPage from '../components/aufgaben/aufgabenpage';
import { aufgabenFetchData } from '../actions/aufgaben';

const mapStateToProps = (state) => {
  return {
    aufgaben: state.aufgaben,
    hasErrored: state.aufgabenHasErrored,
    isLoading: state.aufgabenIsLoading,
    serverResponse: state.aufgabenServerResponse
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(aufgabenFetchData(url))
  };
};

const AufgabenListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AufgabenPage)

export default AufgabenListContainer;
