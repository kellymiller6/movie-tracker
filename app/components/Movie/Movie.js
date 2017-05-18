import React from 'react';
import './Movie.css'

const Movie = ({movieData}) => {

  const { title, overview, poster_path, id } = movieData

  return (
    <div className='movie-card'>
      <div className='container'>
        <img className='movie-img'
        src={ `https://image.tmdb.org/t/p/w500${poster_path}` } />
      </div>
      <h3 className='movie-title'> {title}</h3>
      <p className='movie-overview'>{ overview }</p>
    </div>
  )
}

export default Movie;
