import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should render the expected elements', () => {

    expect(wrapper.find('h1').text()).toEqual('Movie Watcher');
    expect(wrapper.find('Route').length).toBe(5);
  })
})
