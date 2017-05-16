import { connect } from 'react-redux';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies, showAll } from '../../actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
