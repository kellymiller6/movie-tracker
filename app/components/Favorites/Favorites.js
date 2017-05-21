import React from 'react';

const Favorites = ({user, deleteFavorite, fetchFavorites, favorites, history}) => {
  const faves = () => favorites.map((movie, index) => {
    return (
      <div className='movie-card' key={index}>
        <div className='container'>
          <img className='movie-img'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </div>
        <button className='favorited'
          onClick={() => { deleteFavorite(user, movie.movie_id)
            return fetchFavorites(user) } }>
            Favorite
          </button>
          <h3 className='movie-title'>{movie.title}</h3>
          <p className='movie-overview'>Release Date: {movie.release_date}</p>
          <p className='movie-overview'>{movie.overview}</p>
          <p className='movie-overview'>Vote Average: {movie.vote_average}</p>
        </div>
      )
    });

  const checkUser = () => {
    if (!user.id) {
      return (
        <div>
          <h2>Please log in to see favorites</h2>
        </div>
      )
    } else {
      return faves();
    }
  }

  return (
    <div className='favorites-grid'>
      { checkUser() }
    </div>
  )
}

export default Favorites;
