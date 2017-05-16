import { connect } from 'react-redux';
import App from './App';
import { fetchMovies, showAll } from '../../actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
