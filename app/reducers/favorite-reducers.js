const favoriteReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_FAVORITES':
      return [...action.favorites];
    default:
      return state;
  }
}

export default favoriteReducer;
