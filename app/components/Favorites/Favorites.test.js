import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FavoritesContainer from './FavoritesContainer';
import Favorites from './Favorites';

const state = {};
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)();

const setup = () => {
  const Container = mount(<Provider store={mockStore}><FavoritesContainer /></Provider>);
  const Component = Container.find(Favorites);

  return { Container, Component }
};

describe.skip('FavoritesContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('user')
    expect(Object.keys(Component.props())).toContain('favorites')
  })

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('deleteFavorite')
    expect(Object.keys(Component.props())).toContain('fetchFavorites')
  })
})

describe('Favorites component', () => {

  it('should render expected elements without logged in user', () => {
    const userData = {name: '', email: '', password: '', id: ''}
    const wrapper = shallow(<Favorites user={userData} deleteFavorite={()=>{}} fetchFavorites={()=>{}} favorites={{}} history />);

    expect(wrapper.find('h2').text()).toEqual('Please log in to see favorites');
  })

  it('should render expected elements with logged in user', () => {
    const userData = {name: 'Nick', email: 'email', password: 'password', id: '2'}
    const movie = [{poster_path: 'url', movie_id: 'id', title: 'Movie Title', release_date: 'Release date', overview: 'This is the description of this movie', vote_average: '3'}]
    const wrapper = shallow(<Favorites user={userData} deleteFavorite={()=>{}} fetchFavorites={()=>{}} favorites={movie} history />);

    expect(wrapper.find('.movie-title').text()).toEqual('Movie Title');
  })
})
