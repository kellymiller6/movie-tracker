import { connect } from 'react-redux';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies, addFavorite, deleteFavorite, fetchFavorites, signOut } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return { movies: state.movieReducer,
           user: state.userReducer,
           favorites: state.favoriteReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () =>  dispatch(fetchMovies()),
    addFavorite: (id, user, title, poster_path, release_date, vote_average, overview) =>
      dispatch(addFavorite(id, user, title, poster_path, release_date, vote_average, overview)),
    deleteFavorite: (user, id) => dispatch(deleteFavorite(user, id)),
    fetchFavorites: (user) => dispatch(fetchFavorites(user)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
