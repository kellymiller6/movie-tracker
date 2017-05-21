import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import MovieGridContainer from '../MovieGrid/MovieGridContainer';
import FavoritesContainer from '../Favorites/FavoritesContainer';
import CreateUserContainer from '../CreateUser/CreateUserContainer';
import UserLoginContainer from '../Login/UserLoginContainer';

export default class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <h1>Movie Watcher</h1>
          <NavBar />
        </div>
        <Route exact path='/'
               component={MovieGridContainer}
             />
        <Route exact path='/login'
        render={({history}) => <UserLoginContainer history={history} />}
        />
        <Route exact path='/create-account'
        render={({history}) => <CreateUserContainer history={history} />}
        />
        <Route exact path='/favorites'
        render={({history}) => <FavoritesContainer history={history} />}
        />
      </div>
    )
  }
}
