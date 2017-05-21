import React from 'react';

const Favorites = ({user, deleteFavorite, fetchFavorites, favorites}) => {

  const faves = () => favorites.map(movie => {
      return (
        <div className='movie-card'>
          <div className='container'>
            <img className='movie-img'
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </div>
          <button className='mark-favorite favorited'
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

  return (
    <div className='favorites-grid'>
      { faves() }
    </div>
  )
}

export default Favorites;
