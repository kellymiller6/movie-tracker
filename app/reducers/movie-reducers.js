const movieReducer = (state=[], action) => {
  switch(action.type){
    case 'SHOW_ALL':
      return [...state, ...apiResponse]
    case 'SHOW_FAVORITES':
      return [...action.userFavorites]
    default:
      return state;
  }
}

export default movieReducer
