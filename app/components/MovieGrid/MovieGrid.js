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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.name !== nextProps.user.name) {
      this.props.fetchFavorites(nextProps.user)
    }
  }

  logUserOut() {
    this.props.signOut();
    this.props.history.replace('/login');
  }

  render() {
    const { movies, user, addFavorite, deleteFavorite, fetchFavorites, favorites, history} = this.props;

    const welcomeGreeting = () => {
      return user.id ? `Hello, ${user.name}` : '';
    }

    const grid = () => movies.map((movie, index) => {
      return (
        <Movie key={index}
               movieData={movie}
               user={user}
               addFavorite={addFavorite}
               deleteFavorite={deleteFavorite}
               fetchFavorites={fetchFavorites}
               favorites={favorites}
               history={history}
             />
      )
    });

    return (
      <div>
        <h2>{ welcomeGreeting() }</h2>
        <button onClick={() => this.logUserOut()}>Logout</button>
        <div className='movie-grid'>
          { grid() }
        </div>
      </div>
    )
  }
}
