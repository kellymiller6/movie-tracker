const movieReducer = (state=[], action) => {
  switch(action.type){
    case 'RECEIVE_MOVIES':
      return [...action.movies.results];
    default:
      return state;
  }
}

export default movieReducer;
