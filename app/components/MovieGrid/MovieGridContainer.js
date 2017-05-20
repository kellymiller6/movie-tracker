import { connect } from 'react-redux';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies, addFavorite, fetchFavorites } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return { movies: state.movieReducer,
           user: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies()),
    addFavorite: (id, user, title, poster_path, release_date, vote_average, overview) =>
    dispatch(addFavorite(id, user, title, poster_path, release_date, vote_average, overview)),
    fetchFavorites: (user) => dispatch(fetchFavorites(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
