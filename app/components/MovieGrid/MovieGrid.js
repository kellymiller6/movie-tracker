import React, { Component } from 'react';
import Movie from '../Movie/Movie'

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
        <Movie key={movie.id} movieData={movie} />
      )
    })

    return (
      <div>
        <h1>Movie Watcher</h1>
        <div>
          {movies}
        </div>
      </div>
    )
  }
}
