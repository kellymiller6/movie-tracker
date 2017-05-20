import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Movie from '../Movie/Movie';
import Favorites from '../Favorites/Favorites';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
    this.props.fetchFavorites();
  }

  render() {
    const { movies, user, addFavorite, deleteFavorite, favorites } = this.props;
    const grid = movies.map((movie) => {
      return (
        <Movie key={movie.id}
               movieData={movie}
               user={user}
               addFavorite={addFavorite}
               deleteFavorite={deleteFavorite}
               favorites={favorites}
             />
      )
    });

    return (
      <div className='movie-grid'>
        {grid}
      </div>
    )
  }
}
