import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
  } 

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
