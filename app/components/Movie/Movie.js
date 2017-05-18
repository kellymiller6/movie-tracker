import React from 'react';
import './Movie.css'

const Movie = ({movieData, addFavorite, userId}) => {

  const { title, overview, poster_path, movie_id, release_date, vote_average } = movieData

  return (
    <div className='movie-card'>
      <div className='container'>
        <img className='movie-img'
        src={ `https://image.tmdb.org/t/p/w500${poster_path}` } />
      </div>
      <button className='mark-favorite'
              onClick={() => addFavorite(movie_id, userId, title, poster_path, release_date, vote_average, overview)}>
        Favorite
      </button>
      <h3 className='movie-title'> {title}</h3>
      <p className='movie-overview'>{release_date}</p>
      <p className='movie-overview'>{ overview }</p>
      <p className='movie-overview'>{vote_average}</p>
    </div>
  )
}

export default Movie;
