import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Movie from '../Movie/Movie';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies, user, addFavorite, fetchFavorites } = this.props;
    const grid = movies.map((movie) => {
      return (
        <Movie key={movie.id}
               movieData={movie}
               user={user}
               addFavorite={addFavorite}
               fetchFavorites={fetchFavorites}
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
