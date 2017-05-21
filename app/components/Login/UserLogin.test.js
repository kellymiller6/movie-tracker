import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserLoginContainer from './UserLoginContainer';
import UserLogin from './UserLogin';

const state = {};
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)();

const setup = () => {
  const Container = mount(<Provider store={mockStore}><UserLoginContainer /></Provider>);
  const Component = Container.find(UserLogin);

  return { Container, Component }
};

describe('UserLoginContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('activeUser')
  })

  it('should pass down the correct actions as props', () => {
    expect(Object.keys(Component.props())).toContain('signIn')
  })
})

describe('UserLogin component', () => {
  const { Component } = setup();

  it('should begin with default state', () => {
    expect(Component.node.state).toEqual({email: '', password: ''});
  })

  it('should alter state when values added to input', () => {
    let emailInput = Component.find('.email');
    emailInput.simulate('change', {target: {value: 'kelly@gmail.com'}})
    let pwInput = Component.find('.password');
    pwInput.simulate('change', {target: {value: 'thebestpasswordever'}})

    expect(Component.node.state).toEqual({email: 'kelly@gmail.com', password: 'thebestpasswordever'})
  })
})
