export const createAccount = (user) => {
  return {
    type: 'CREATE_ACCOUNT',
    user
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
    type: 'SHOW_FAVORITES',
    favorites
  }
}

export const fetchMovies = () => {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cbe22e12e2a525d944ad1729b43212d3&language=en-US&page=1')
    .then((response) => response.json())
    .then((movies) => {
      dispatch(receiveMovies(movies))
    })
    .catch(() => {
      console.log('fetching error')
    })
  }
}

export const addFavorite = (id, userId, title, poster_path, release_date, vote_average, overview) => {
  return dispatch => {
    fetch('/api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ movie_id: id, user_id: userId.id, title, poster_path, release_date, vote_average, overview })
    })
  }
}

export const deleteFavorite = (userId, movie_id) => {
  return dispatch => {
    fetch(`/api/users/${userId}/favorites/${movie_id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ user_id: userId, movie_id })
    })
  }
}

export const fetchFavorites = (userId) => {
  return dispatch => {
    fetch(`/api/users/${userId.id}/favorites`)
    .then((response) => response.json())
    .then((favorites) => {
      dispatch(showFavorites(favorites))
    })
    .catch(() => {
      console.log('fetching favorites error')
    })
  }
}
