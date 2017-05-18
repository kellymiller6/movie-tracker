import { connect } from 'react-redux';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies, addFavorite } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return { movies: state.movieReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies())
    // addFavorite: (movie_id, userId, title, poster_path, release_date, vote_average, overview) =>
      // dispatch(addFavorite(movie_id, userId, title, poster_path, release_date, vote_average, overview))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
