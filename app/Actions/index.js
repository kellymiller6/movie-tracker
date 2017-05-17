export const createAccount = (account) => {
  return {
    type: 'CREATE_ACCOUNT',
    account
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
    .then((response) => response.json())
    .then((movies) => {
      dispatch(receiveMovies(movies))
    })
    .catch(() => {
      console.log('fetching error')
    })
  }
}

export const addFavorite = (info) => {
  return dispatch => {
    fetch('/api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ info })
    })
  }
}

export const deleteFavorite = (userId, movieId) => {
  return dispatch => {
    fetch(`/api/users/${userId}/favorites/${movieId}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ userId, movieId })
    })
  }
}

export const fetchFavorites = (userId) => {
  return dispatch => {
    fetch(`/api/users/${userId}/favorites`)
    .then((response) => response.json())
    .then((favorites) => {
      dispatch(showFavorites(favorites))
    })
    .catch(() => {
      console.log('fetching favorites error')
    })
  }
}
