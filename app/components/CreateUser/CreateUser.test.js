import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CreateUserContainer from './CreateUserContainer';
import CreateUser from './CreateUser';
import rootReducer from '../../reducers/index.js';

const state = {};
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)({
  user: {
    name: '',
    email: '',
    password: '',
    id: ''
  }
});

const success = () => {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}

const fetchData = () => {
  return (dispatch) => {
    return fetch('/api/users/new', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, email, password})
    })
      .then(() => dispatch(success()))
  }
}

const setup = () => {
  const Container = mount(<Provider store={mockStore}><CreateUserContainer /></Provider>);
  const Component = Container.find(CreateUser);

  return { Container, Component }
};

describe('CreateUserContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Component.props().items).toEqual({})
  })

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('createAccount')
  })
})
