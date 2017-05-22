import favoriteReducer from './favorite-reducers';

describe('favoriteReducer', () => {

  it('should return a default state', () => {

    expect(favoriteReducer(undefined, {})).toEqual([])
  })

  it('should show favorites', () => {
    const mockFavorites = [{
       id: 1,
       poster: 'string',
       title: 'The Boss Baby',
       release: '2017-03-23',
       overview: 'Movie overview',
       average: 5.6
    }]

    expect(favoriteReducer(mockFavorites, 'SHOW_FAVORITES')).toEqual(mockFavorites)
  })

})
