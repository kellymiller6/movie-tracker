import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';

import Movie from './Movie';
import { addFavorite, fetchFavorites, deleteFavorite} from '../../reducers/index.js'

describe('Movie', () => {
  const movie = {
    poster: 'string',
    title: 'The Boss Baby',
    release: '2017-03-23',
    overview: 'Movie overview',
    average: 5.6
  }

  const favorites = {};

  it('should render a movie card', () => {
    const wrapper = shallow(<Movie movieData={movie}
                                   user=''
                                   addFavorite={addFavorite}
                                   deleteFavorite={deleteFavorite}
                                   fetchFavorites={fetchFavorites}
                                   favorites={favorites} />);

    expect(wrapper.find('.movie-card').length).toBe(1)
    expect(wrapper.find('.movie-title').text()).toBe('The Boss Baby')
  });
});
