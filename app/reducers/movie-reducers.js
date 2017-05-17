const movieReducer = (state=[], action) => {
  switch(action.type){
    case 'RECEIVE_MOVIES':
      return [...state, ...action.movies.results];
    case 'SHOW_FAVORITES':
      return [...action.favorites];
    case 'TOGGLE_FAVORITES':
      return state.map(movie => {
        if(movie.id !== action.id) {
          return movie;
        }
        return Object.assign({}, todo, {favorited: !movie.favorited});
      })
    default:
      return state;
  }
}

export default movieReducer;
