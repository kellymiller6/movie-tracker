import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CreateUserContainer from './CreateUserContainer';
import CreateUser from './CreateUser';

const state = {};
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)();

const setup = () => {
  const Container = mount(<Provider store={mockStore}><CreateUserContainer /></Provider>);
  const Component = Container.find(CreateUser);

  return { Container, Component }
};

describe('CreateUserContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('user')
  })

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('createAccount')
  })
})

describe('CreateUser component', () => {
  const { Component } = setup();

  it('should begin with default state', () => {
    expect(Component.node.state).toEqual({name: '', email: '', password: ''});
  })

  it('should alter state when values added to input', () => {
    let nameInput = Component.find('.name');
    nameInput.simulate('change', {target: {value: 'Kelly'}})
    let emailInput = Component.find('.email');
    emailInput.simulate('change', {target: {value: 'kelly@gmail.com'}})
    let pwInput = Component.find('.password');
    pwInput.simulate('change', {target: {value: 'thebestpasswordever'}})

    expect(Component.node.state).toEqual({name: 'Kelly', email: 'kelly@gmail.com', password: 'thebestpasswordever'})
  })
})
