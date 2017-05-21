import favoriteReducer from './favorite-reducers';

describe('favoriteReducer', () => {

  it('should return a default state', () => {

    expect(favoriteReducer(undefined, {})).toEqual([])
  });

  it('should return an array of favorites', () => {
    const mockFavorites = [{
       id: 1,
       poster: 'string',
       title: 'The Boss Baby',
       release: '2017-03-23',
       overview: 'Movie overview',
       average: 5.6
    }];
    const expectedAction = { type: 'SHOW_FAVORITES' };

    expect(favoriteReducer(mockFavorites, expectedAction)).toEqual(mockFavorites)
  });
});
