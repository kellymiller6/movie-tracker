import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Movie from '../Movie/Movie';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
    getFavorites();
  }

  getFavorites() {
    const favList = this.props.fetchFavorites(this.props.user);
    return favList;
  }

  render() {
    const { movies, user, addFavorite } = this.props;
    const grid = movies.map((movie) => {
      return (
        <Movie key={movie.id}
               movieData={movie}
               user={user}
               addFavorite={addFavorite}
               favorites={favList}
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
