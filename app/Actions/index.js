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

export const addFavorite = (id, user, title, poster_path, release_date, vote_average, overview) => {
  return dispatch => {
    fetch('/api/users/favorites/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ movie_id: id, user_id: user.id, title, poster_path, release_date, vote_average, overview })
    })
  }
}

export const deleteFavorite = (user, id) => {
  return dispatch => {
    fetch(`/api/users/${user.id}/favorites/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ user_id: user.id, movie_id: id })
    })
  }
}

export const fetchFavorites = (user) => {
  return dispatch => {
    fetch(`/api/users/${user.id}/favorites`)
    .then((response) => response.json())
    .then((favorites) => {
      return dispatch(showFavorites(favorites.data))
    })
    .catch(() => {
      console.log('fetching favorites error')
    })
  }
}
