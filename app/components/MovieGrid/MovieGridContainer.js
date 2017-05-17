import { connect } from 'react-redux';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies, showAll } from '../../Actions/index.js';

const mapStateToProps = (state) => {
  return { movies: state.movieReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
