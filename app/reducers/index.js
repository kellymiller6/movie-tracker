import { combineReducers } from 'redux'
import movieReducer from './movie-reducers'
import userReducer from './user-reducers'

const rootReducer = combineReducers({
  movieReducer,
  userReducer
})

export default rootReducer
