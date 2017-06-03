import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import * as actions from './index.js';
import mockNewReleases from '../components/MovieGrid/mockNewReleases.json';
import mockFavorites from '../components/MovieGrid/mockFavorites.json';

describe('actions', () => {

  const store = configureMockStore()();

  it('createAccount returns an object with user and type', () => {
    const user = {
      name: 'Andrew',
      email: 'andrew@gmail.com',
      password:'password',
      id:1};

    const action = actions.createAccount(user);

    const returnedObj = {
      type: 'CREATE_ACCOUNT',
      user
    }

    expect(action).toEqual(returnedObj)
  })

  it('should create an action to log in', () => {
    const user = { email: 'ron@yahoo.com', password: 'potatoes', id:2 };
    const action = actions.signIn(user);

    const expectedAction = {
      type: 'SIGN_IN',
      user
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to signout', () => {
    const action = actions.signOut();

    const expectedAction = {
      type: 'SIGN_OUT'
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to receive movies', () => {
    const movies = mockNewReleases;
    const action = actions.receiveMovies(movies);

    const expectedAction = {
      type: 'RECEIVE_MOVIES',
      movies
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to receive favorites', () => {
    const favorites = mockFavorites;
    const action = actions.showFavorites(favorites);

    const expectedAction = {
      type: 'SHOW_FAVORITES',
      favorites
    }

    expect(action).toEqual(expectedAction)
  })
})
