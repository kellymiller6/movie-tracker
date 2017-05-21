import React, { Component } from 'react';

const Favorites = ({user, deleteFavorite, fetchFavorites, favorites}) => {

  const faves = () => favorites.map((movie, index) => {
      return <Movie key={index}
                    movieData={movie}
                    user={user}
                    addFavorite={''}
                    deleteFavorite={deleteFavorite}
                    fetchFavorites={fetchFavorites}
                    favorites={favorites}
                  />
  });

  return (
    <div className='favorites-grid'>
      { faves() }
    </div>
  )
}

export default Favorites;
