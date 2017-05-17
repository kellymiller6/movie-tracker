export const createAccount = (name, password, email, id) => {
  return {
    type: 'CREATE_ACCOUNT',
    name,
    password,
    email,
    id
  }
}

export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    user
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const receiveMovies = (movies) => {
  return {
    type: 'RECEIVE_MOVIES',
    movies
  }
}

export const showFavorites= (favorites) => {
  return {
    type: 'SHOW_FAVORITES'
    favorites
  }
}

export const fetchMovies = () => {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cbe22e12e2a525d944ad1729b43212d3&language=en-US&page=1')
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      console.log(movies.results);
      dispatch(receiveMovies(movies));
    })
    .catch(() => {
      console.log('fetching error');
    });
  }
}

export const addFavorite = (info) => {
  return dispatch => {
    fetch('api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ info })
    });
  }
}
