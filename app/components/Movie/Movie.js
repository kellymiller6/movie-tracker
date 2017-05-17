import React from 'react';

const Movie = ({movieData}) => {

  const { title, overview, poster_path, id } = movieData

  return (
    <div>
      <img src={ `https://image.tmdb.org/t/p/w500${poster_path}` } />
      <h3>Title: {title}</h3>
      <p>{ overview }</p>
    </div>
  )
}

export default Movie;
