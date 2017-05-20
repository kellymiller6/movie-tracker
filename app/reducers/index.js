import { combineReducers } from 'redux';
import movieReducer from './movie-reducers';
import userReducer from './user-reducers';
import favoriteReducer from './favorite-reducers';

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  favoriteReducer
});

export default rootReducer;
