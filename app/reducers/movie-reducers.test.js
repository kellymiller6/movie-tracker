import movieReducer from './movie-reducers';

describe('movieReducer', () => {

  it('should return a default state', () => {
    expect(movieReducer(undefined, {})).toEqual([])
  });

  it('should return an array of movies', () => {
    const mockMovies = [
      { id: 1,
        poster: 'string',
        title: 'The Boss Baby',
        release: '2017-03-23',
        overview: 'Movie overview',
        average: 5.6
      }
    ];

    expect(movieReducer(mockMovies, 'RECEIVE_MOVIES')).toEqual(mockMovies);
  });
});
