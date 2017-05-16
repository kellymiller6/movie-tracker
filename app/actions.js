export const createAccout = (name, password, email) => {
  return {
    type: 'CREATE_ACCOUNT',
    name,
    password,
    email
  }
}

export const signIn = (email, password) => {
  return {
    type: 'SIGN_IN',
    email,
    password
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'

  }
}

export const showAll = (movies) => {
  return {
    type: 'SHOW_ALL',
    movies
  }
}

export const showFavorites= () => {
  return {
    type: 'SHOW_FAVORITES'
  }
}

export const fetchMovies = () => {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cbe22e12e2a525d944ad1729b43212d3&language=en-US&page=1')
    .then(response=>response.json())
    .then((movies)=> { return dispatch(showAll(movies.results)) })
    .catch(()=> {console.log('fetching error')})
  }
}
