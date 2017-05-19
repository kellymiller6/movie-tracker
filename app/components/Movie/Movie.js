import React from 'react';
import './Movie.css';

const Movie = ({movieData, user, addFavorite, fetchFavorites}) => {

  const { id, title, poster_path, release_date, vote_average, overview } = movieData;

  const favoriteMovie = () => {
    if (!user.id) {
      alert('Please log in or create an account');
    } else {
      addFavorite(id, user, title, poster_path, release_date, vote_average, overview);
      fetchFavorites(user);
    }
  }

  return (
    <div className='movie-card'>
      <div className='container'>
        <img className='movie-img'
             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
           />
      </div>
      <button className='mark-favorite'
              onClick={() => favoriteMovie()}>
              Favorite
            </button>
      <h3 className='movie-title'>{title}</h3>
      <p className='movie-overview'>Release Date: {release_date}</p>
      <p className='movie-overview'>{overview}</p>
      <p className='movie-overview'>Vote Average: {vote_average}</p>
    </div>
  )
}

export default Movie;
