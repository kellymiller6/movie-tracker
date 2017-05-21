import { connect } from 'react-redux';
import Favorites from '../Favorites/Favorites';
import { deleteFavorite, fetchFavorites } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return {
           user: state.userReducer,
           favorites: state.favoriteReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (user, id) => dispatch(deleteFavorite(user, id)),

    fetchFavorites: (user) => dispatch(fetchFavorites(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
