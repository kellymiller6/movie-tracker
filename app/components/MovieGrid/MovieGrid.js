import React, { Component } from 'react';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  displayMovies() {
    this.props.state.movieReducer.map((movie) => {
      return (
        <Movie movieData={movie} />
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>

        <div>
          {console.log(this.props)}
        </div>
      </div>
    )
  }
}
