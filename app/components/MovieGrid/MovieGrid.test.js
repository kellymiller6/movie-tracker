import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import MovieGridContainer from './MovieGridContainer';
import MovieGrid from './MovieGrid';
import mockFavorites from './mockFavorites';
import mockNewReleases from './mockNewReleases';

const state = {};
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)();

const setup = () => {
  const Container = mount(<Provider store={mockStore}><MovieGridContainer /></Provider>);
  const Component = Container.find(MovieGrid);

  return { Container, Component }
};

describe('MovieGridContainer', () => {
  beforeEach(() => {
    const user = {"id":2,"name":"Devin","password":"password","email":"devin@gmail.com"};
    const id = 2;

   fetchMock.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cbe22e12e2a525d944ad1729b43212d3&language=en-US&page=1', {status: 200, body: mockNewReleases})

    fetchMock.post('/api/users/favorites/new', {status: 200})

   fetchMock.delete(`/api/users/${user.id}/favorites/${id}`, {status: 200})

    fetchMock.get(`/api/users/${user.id}/favorites`, {status: 200, body: mockFavorites})

    fetchMock( '*' , {status: 200})
})

  const { Container, Component } = setup();

  it.skip('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('movies, user, favorites')
  })

  it.skip('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('fetchMovies, addFavorite, deleteFavorite, fetchFavorites')
  })
})

describe('MovieGrid component', () => {
  const { Component } = setup();

  it.skip('should render', () => {
    expect(Component.find(h2).length).toBe(1);
  })
})
