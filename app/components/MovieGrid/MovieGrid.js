import React, { Component } from 'react';
import Movie from '../Movie/Movie'
import MovieGridContainer from '../MovieGrid/MovieGridContainer';
import CreateUserContainer from '../CreateUser/CreateUserContainer';
import UserLoginContainer from '../Login/UserLoginContainer';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
  }


  render() {
    const movies = this.props.movies.map((movie) => {
      return (
        <Movie key={movie.id} movieData={movie} userId={this.props.userId} addFavorite={this.props.addFavorite}/>
      )
    })

    return (
      <div className='app'>
        <UserLoginContainer />
        <CreateUserContainer />

        <div className='header'>
          <h1>Movie Watcher</h1>
        </div>
        <div className='movie-grid'>
          {movies}
        </div>
      </div>
    )
  }
}
