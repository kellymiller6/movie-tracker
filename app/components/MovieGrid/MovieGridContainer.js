import { connect } from 'react-redux';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies, addFavorite, fetchFavorites } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return { movies: state.movieReducer,
           userId: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies()),
    addFavorite: (id, userId, title, poster_path, release_date, vote_average, overview) =>
      dispatch(addFavorite(id, userId, title, poster_path, release_date, vote_average, overview)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
